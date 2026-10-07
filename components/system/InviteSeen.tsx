"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Reports that an invitation was opened (no names or tokens leave the page).
export function InviteSeen() {
  useEffect(() => { track("invite_open"); }, []);
  return null;
}
