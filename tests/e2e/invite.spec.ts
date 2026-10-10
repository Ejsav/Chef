import { createHmac } from "node:crypto";
import { expect, test } from "@playwright/test";
import { INVITE_SECRET } from "../../playwright.config";

function token(payload: object) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${createHmac("sha256", INVITE_SECRET).update(body).digest("base64url")}`;
}

test("a signed invitation greets the guest and is never indexed", async ({ page }) => {
  await page.goto(`/invite/${token({ n: "Mr. and Mrs. Whitman", m: "For June.", x: Date.now() + 864e5 })}`);
  await expect(page.locator("h1")).toContainText("Mr. and Mrs. Whitman");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("expired and tampered invitations close politely", async ({ page }) => {
  await page.goto(`/invite/${token({ n: "Late Guest", x: Date.now() - 1000 })}`);
  await expect(page.locator("h1")).toContainText("closed");
  const t = token({ n: "Someone", x: Date.now() + 864e5 });
  await page.goto(`/invite/${t.slice(0, -2)}xx`);
  await expect(page.locator("h1")).toContainText("could not be");
});
