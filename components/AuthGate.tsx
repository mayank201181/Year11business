"use client";
// Optional Cloud Family Sync modal over the running zero-login app — never blocks local study.
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";

type Tab = "welcome" | "login" | "signup";

export function AuthGate({ onClose }: { onClose?: () => void }) {
  const { login, signup, startGuest, closeAuthModal, accountsAvailable } = useStore();
  const dismiss = onClose ?? closeAuthModal;
  const [tab, setTab] = useState<Tab>("welcome");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dismiss]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const r = tab === "login" ? await login(name, password) : await signup(name, password, pin);
    setBusy(false);
    if (!r.ok) setError(r.error ?? "Something went wrong.");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="card relative max-h-[90vh] w-full max-w-md overflow-y-auto p-6 shadow-2xl">
        <button
          type="button"
          className="btn btn-ghost btn-sm absolute top-3 right-3 h-9 w-9 p-0"
          onClick={dismiss}
          aria-label="Close Cloud Sync dialog"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-3xl text-white shadow-md" aria-hidden>
            ☁️
          </div>
          <h2 id="auth-modal-title" className="mt-3 text-2xl font-black tracking-tight">
            Optional Cloud Family Sync
          </h2>
          <p className="mt-1.5 text-sm text-ink-2">
            Your progress is already saved automatically on this device for <strong>Vanishree</strong>. Sign in only if you want cross-device cloud backup.
          </p>
        </div>

        {tab === "welcome" ? (
          <div className="mt-6 space-y-2.5">
            {accountsAvailable ? (
              <>
                <button type="button" className="btn btn-primary w-full" onClick={() => setTab("login")}>
                  Sign in to family account
                </button>
                <button type="button" className="btn btn-secondary w-full" onClick={() => setTab("signup")}>
                  Create a family account
                </button>
              </>
            ) : (
              <p className="rounded-xl bg-surface-2 px-3.5 py-2.5 text-center text-sm text-ink-2">
                Cloud accounts aren&apos;t configured on this deployment — local device auto-save is active and ready.
              </p>
            )}
            <button
              type="button"
              className="btn btn-ghost w-full"
              onClick={() => {
                startGuest();
                dismiss();
              }}
            >
              Continue on this device (Vanishree)
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={submit}>
            <h3 className="text-lg font-extrabold">{tab === "login" ? "Sign in" : "Create a family account"}</h3>
            <label className="block space-y-1">
              <span className="text-sm font-bold text-ink-2">Family name</span>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="username" required maxLength={40} autoFocus />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-bold text-ink-2">Password</span>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={tab === "login" ? "current-password" : "new-password"}
                required
                minLength={tab === "signup" ? 6 : 1}
              />
            </label>
            {tab === "signup" ? (
              <label className="block space-y-1">
                <span className="text-sm font-bold text-ink-2">Parent PIN (4–8 digits)</span>
                <input
                  className="input tracking-[0.3em]"
                  inputMode="numeric"
                  pattern="\d{4,8}"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 8))}
                  required
                />
                <span className="block text-xs text-ink-2">Grown-ups use this to open the parent dashboard and manage learners.</span>
              </label>
            ) : null}
            {error ? (
              <p className="rounded-xl bg-bad-soft px-3 py-2 text-sm" role="alert">
                {error}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <button type="submit" className="btn btn-primary" disabled={busy}>
                {busy ? "Please wait…" : tab === "login" ? "Sign in" : "Create account"}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setTab("welcome");
                  setError(null);
                }}
              >
                Back
              </button>
            </div>
            <p className="text-sm text-ink-2">
              {tab === "login" ? "New here? " : "Already have an account? "}
              <button
                type="button"
                className="font-bold text-brand underline"
                onClick={() => {
                  setTab(tab === "login" ? "signup" : "login");
                  setError(null);
                }}
              >
                {tab === "login" ? "Create a family account" : "Sign in"}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
