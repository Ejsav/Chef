"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Phones get the invitation where the thumb already is. It arrives once the
// opening has been seen, rests in the safe area above the home indicator, and
// steps away near the closing invitation and on the inquiry itself.
export function MobileBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const suppressed = pathname.startsWith("/inquire") || pathname.startsWith("/invite");

  useEffect(() => {
    const onScroll = () => {
      const nearEnd = scrollY + innerHeight > document.documentElement.scrollHeight - innerHeight * 1.4;
      setShow(scrollY > innerHeight * 0.7 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (suppressed) return null;
  return (
    <div
      id="mobile-bar"
      className={cn(
        "safe-bottom pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 transition-[transform,opacity] duration-700 ease-out-expo md:hidden",
        show ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0",
      )}
    >
      <Link
        href="/inquire"
        data-track="cta:mobile-bar"
        tabIndex={show ? 0 : -1}
        aria-hidden={!show}
        className="pointer-events-auto flex h-14 w-full max-w-md items-center justify-between border border-[rgb(var(--brass)/0.55)] bg-[rgba(17,12,9,0.82)] px-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[rgb(var(--ivory))] backdrop-blur-xl active:scale-[0.98] transition-transform"
      >
        <span>Request an evening</span>
        <svg aria-hidden viewBox="0 0 24 10" className="h-2.5 w-6" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 5h22.5M18.5 1l4 4-4 4" /></svg>
      </Link>
    </div>
  );
}
