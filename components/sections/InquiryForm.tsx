"use client";
import { useEffect, useRef, useState } from "react";
import { experienceOptions, inquirySchema, type InquiryErrors } from "@/lib/inquiry";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow } from "@/components/ui/Cta";

type Status = "idle" | "sending" | "sent" | "error";

// A reservation book, not a contact form: underlined fields, generous space,
// only what the office needs to begin. Errors are tied to inputs for screen readers.
export function InquiryForm() {
  // ?experience=<slug> preselects the experience. Read on the client so the
  // page itself stays fully static.
  const selectRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("experience");
    if (preset && selectRef.current && experienceOptions.some((o) => o.value === preset)) {
      selectRef.current.value = preset;
    }
  }, []);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      const next: InquiryErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof InquiryErrors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setFormError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json()) as { ok: boolean; error?: string; errors?: InquiryErrors };
      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setFormError(body.error ?? "Please review the highlighted fields.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setFormError(`Something interrupted the connection. Please try again, or write to ${site.email}.`);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-line pt-12">
        <p className="font-display text-sm italic text-accent">Received.</p>
        <p className="text-h2 mt-6 max-w-[18ch]">Thank you. The table has been noted.</p>
        <p className="text-lead mt-8 max-w-md">{site.responseNote}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-10 gap-y-10 md:grid-cols-2" aria-describedby={formError ? "form-error" : undefined}>
      <Field name="name" label="Your name" autoComplete="name" error={errors.name} required />
      <Field name="email" label="Email" type="email" autoComplete="email" error={errors.email} required />
      <Field name="phone" label="Telephone" type="tel" autoComplete="tel" error={errors.phone} hint="Optional" />

      <div>
        <Label htmlFor="experience" required>The experience</Label>
        <select
          id="experience"
          name="experience"
          ref={selectRef}
          defaultValue=""
          className="field"
          aria-invalid={!!errors.experience}
          aria-describedby={errors.experience ? "experience-error" : undefined}
        >
          <option value="" disabled>Choose one</option>
          {experienceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ErrorText id="experience-error" message={errors.experience} />
      </div>

      <Field name="date" label="Date or season" placeholder="e.g. Late June, or a specific date" error={errors.date} hint="Optional" />
      <Field name="guests" label="Number of guests" inputMode="numeric" error={errors.guests} hint="Optional" />
      <div className="md:col-span-2">
        <Field name="location" label="Where will the table be?" placeholder="Town, residence, vessel or island" error={errors.location} required />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="message">The occasion</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field"
          placeholder="Who is coming, what you are celebrating, anything Chef should know."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <ErrorText id="message-error" message={errors.message} />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 border-t border-line pt-10 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm text-sm text-fg-muted">
          Your details are used only to reply to this inquiry. Never shared, never added to a list.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group relative inline-flex h-14 items-center justify-center gap-4 overflow-hidden border border-accent/70 px-10 text-[0.74rem] font-medium uppercase tracking-[0.26em] text-fg transition-colors duration-700 ease-out-expo hover:text-[rgb(var(--ink))] disabled:cursor-wait disabled:opacity-60"
        >
          <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-y-100" />
          <span className="relative">{status === "sending" ? "Sending…" : "Send the inquiry"}</span>
          <Arrow className="relative transition-transform duration-700 ease-out-expo group-hover:translate-x-1" />
        </button>
      </div>

      <p id="form-error" role="alert" className={cn("text-sm text-[#d98c88] md:col-span-2", !formError && "sr-only")}>{formError}</p>
    </form>
  );
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-eyebrow block">
      {children}
      {required ? <span aria-hidden className="ml-1 text-accent">*</span> : null}
    </label>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="mt-2 text-sm text-[#d98c88]">{message}</p>;
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { name: string; label: string; error?: string; hint?: string };

function Field({ name, label, error, hint, required, ...rest }: FieldProps) {
  const describedBy = [error && `${name}-error`, hint && `${name}-hint`].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <Label htmlFor={name} required={required}>{label}</Label>
        {hint ? <span id={`${name}-hint`} className="text-[0.66rem] uppercase tracking-[0.2em] text-fg-muted">{hint}</span> : null}
      </div>
      <input
        id={name}
        name={name}
        className="field"
        aria-required={required || undefined}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...rest}
      />
      <ErrorText id={`${name}-error`} message={error} />
    </div>
  );
}
