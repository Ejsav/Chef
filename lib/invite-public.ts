// Client-safe peek at an invitation's payload, for greeting only. It does NOT
// verify the signature — the server re-verifies every token it receives.
export function peekInviteName(token: string | null): string | null {
  if (!token) return null;
  try {
    const body = token.split(".")[0]!.replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(body), (c) => c.charCodeAt(0));
    const p = JSON.parse(new TextDecoder().decode(bytes)) as { n?: unknown; x?: unknown };
    if (typeof p.n !== "string" || (typeof p.x === "number" && Date.now() > p.x)) return null;
    return p.n.slice(0, 80);
  } catch {
    return null;
  }
}
