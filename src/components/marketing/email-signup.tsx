"use client";

/**
 * EmailSignup — the primary conversion element for the audience-building phase.
 *
 * Newsletter + priority waitlist capture. Low-friction: email only.
 * Reused on the homepage hero, the final CTA band, and the newsletter page.
 *
 * Posts to /api/subscribe (currently a stub) and fires analytics on submit +
 * success. Collects ZERO PHI — email + a non-clinical "source" label only.
 */

import { useState, useId } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailSignup({
  source,
  variant = "default",
  ctaLabel = "Join the list",
  placeholder = "you@email.com",
  className,
}: {
  /** Non-clinical label for where the signup came from, e.g. "hero", "footer". */
  source: string;
  variant?: "hero" | "default";
  ctaLabel?: string;
  placeholder?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const fieldId = useId();

  const isHero = variant === "hero";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setError(null);
    track.signupSubmit(source);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      track.signupSuccess(source);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl bg-primary/8 px-5 py-4",
          isHero && "px-6 py-5",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <span className="material-symbols-outlined text-primary" aria-hidden="true">
          mark_email_read
        </span>
        <p className="text-sm leading-relaxed text-foreground">
          You&rsquo;re on the list. Watch your inbox for the next briefing — and
          you now have priority on the waitlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)} noValidate>
      <label htmlFor={fieldId} className="sr-only">
        Email address
      </label>
      <div
        className={cn(
          "flex flex-col gap-3 sm:flex-row",
          isHero && "sm:gap-2"
        )}
      >
        <Input
          id={fieldId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          aria-invalid={status === "error"}
          disabled={status === "submitting"}
          className={cn(
            "flex-1 rounded-full border-transparent bg-card px-5 text-base shadow-sm shadow-primary/5 placeholder:text-muted-foreground/70 focus-visible:ring-primary/30",
            isHero ? "h-14 sm:px-6" : "h-12"
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "glass-primary group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border-0 px-7 font-label font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/20 transition-all hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70",
            isHero ? "h-14 text-xs sm:px-8" : "h-12 text-[10px] px-6"
          )}
        >
          {status === "submitting" ? "Joining…" : ctaLabel}
          {status !== "submitting" && (
            <span
              className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          )}
        </button>
      </div>

      {error && (
        <p className="mt-2.5 pl-1 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
