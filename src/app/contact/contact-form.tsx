"use client";

import { useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { EMPTY, validate, type Errors, type FieldName, type Fields } from "./validate";

const ENDPOINT = "https://api.web3forms.com/submit";
// Web3Forms access keys are public by design: they only route submissions to the
// inbox registered with the key.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
// A stalled request must not leave the form stuck on "Sending...".
const REQUEST_TIMEOUT_MS = 15000;

const ORG_TYPES = [
  "Founder with an idea",
  "Startup",
  "Growing business",
  "Agency",
  "Established organization",
  "Legacy enterprise",
  "Something else",
];

const LABELS: Record<FieldName, string> = {
  name: "Your name",
  email: "Email",
  organization: "Organization",
  phone: "Phone",
  orgType: "What best describes you",
  now: "Where you are now",
  next: "Where you want to go",
};

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const failRef = useRef<HTMLDivElement>(null);

  const set = (name: FieldName, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name] || errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
  };
  const blur = (name: FieldName) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, orgType: true, now: true, next: true });
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    setStatus("submitting");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      if (!ACCESS_KEY) throw new Error("Form service is not configured");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${values.name.trim()} (${values.orgType})`,
          from_name: "Trigarty website",
          replyto: values.email.trim(),
          botcheck: honeypot ? true : "",
          name: values.name.trim(),
          email: values.email.trim(),
          organization: values.organization.trim() || "Not given",
          phone: values.phone.trim() || "Not given",
          organization_type: values.orgType,
          where_we_are_now: values.now.trim(),
          where_we_want_to_go: values.next.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error("Submission failed");
      setStatus("success");
      setValues(EMPTY);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
      requestAnimationFrame(() => failRef.current?.focus());
    } finally {
      clearTimeout(timer);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-l-[3px] border-trigarty-mint pl-6 py-2">
        <h2 ref={successRef} tabIndex={-1} className="t-h3 text-[1.75rem] mb-4 outline-none">
          Thank you. Your message has been sent.
        </h2>
        <p className="t-body mb-6">
          We will reply by email. If anything changes in the meantime, write to{" "}
          <a href={`mailto:${SITE.email}`} className="text-link text-foreground">
            {SITE.email}
          </a>
          .
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as FieldName[]).filter((k) => errors[k]);
  const describe = (name: FieldName, hint?: string) =>
    [hint, errors[name] ? `${name}-error` : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby="form-note" className="flex flex-col gap-7">
      <p id="form-note" className="t-body">
        All fields are required unless marked optional.
      </p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border border-[color:var(--error)] p-5 outline-none">
          <h2 className="font-sans text-[15px] font-semibold mb-2" style={{ color: "var(--error)" }}>
            Please fix {errorList.length === 1 ? "this field" : `these ${errorList.length} fields`}:
          </h2>
          <ul className="list-disc pl-5 text-[14px] leading-[1.7]">
            {errorList.map((k) => (
              <li key={k}>
                <a href={`#${k === "orgType" ? "orgType-0" : k}`} className="text-link">
                  {LABELS[k]}: {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && (
        <div ref={failRef} tabIndex={-1} role="alert" className="border border-[color:var(--error)] bg-card p-5 outline-none">
          <h2 className="font-sans text-[15px] font-semibold mb-2" style={{ color: "var(--error)" }}>
            Your message was not sent.
          </h2>
          <p className="text-[14px] leading-[1.7]">
            Something went wrong on our side. Your answers are still here, so you can try again, or email{" "}
            <a href={`mailto:${SITE.email}`} className="text-link break-all">
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${SITE.phoneE164}`} className="text-link">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label htmlFor="name" className="field-label">
            {LABELS.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field-input"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            aria-required="true"
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            {LABELS.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            className="field-input"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            aria-required="true"
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="organization" className="field-label">
            {LABELS.organization} <span className="text-muted normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className="field-input"
            value={values.organization}
            onChange={(e) => set("organization", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            {LABELS.phone} <span className="text-muted normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field-input"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={describe("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="field-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <fieldset aria-describedby={errors.orgType ? "orgType-error" : undefined}>
        <legend className="field-label">{LABELS.orgType}</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ORG_TYPES.map((t, i) => (
            <label
              key={t}
              className={`flex items-center gap-3 min-h-12 px-4 py-2 border bg-background cursor-pointer transition-[border-color,box-shadow,background-color] text-[15px]
                          has-[:checked]:border-foreground has-[:checked]:bg-surface has-[:checked]:font-medium has-[:checked]:shadow-[inset_3px_0_0_#4DC2B1] hover:border-foreground/50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-foreground
                          ${errors.orgType ? "border-[color:var(--error)]" : "border-input"}`}
            >
              <input
                id={`orgType-${i}`}
                type="radio"
                name="orgType"
                value={t}
                checked={values.orgType === t}
                onChange={() => set("orgType", t)}
                className="w-4 h-4 accent-[#111110] shrink-0"
              />
              {t}
            </label>
          ))}
        </div>
        {errors.orgType && (
          <p id="orgType-error" className="field-error">
            {errors.orgType}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor="now" className="field-label">
          {LABELS.now}
        </label>
        <p id="now-hint" className="text-[14px] text-muted mb-3">
          What is happening today, and what is getting in the way?
        </p>
        <textarea
          id="now"
          name="now"
          rows={4}
          className="field-input resize-y"
          value={values.now}
          onChange={(e) => set("now", e.target.value)}
          onBlur={() => blur("now")}
          aria-invalid={!!errors.now}
          aria-describedby={describe("now", "now-hint")}
          aria-required="true"
        />
        {errors.now && (
          <p id="now-error" className="field-error">
            {errors.now}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="next" className="field-label">
          {LABELS.next}
        </label>
        <p id="next-hint" className="text-[14px] text-muted mb-3">
          What should be true once this is solved?
        </p>
        <textarea
          id="next"
          name="next"
          rows={4}
          className="field-input resize-y"
          value={values.next}
          onChange={(e) => set("next", e.target.value)}
          onBlur={() => blur("next")}
          aria-invalid={!!errors.next}
          aria-describedby={describe("next", "next-hint")}
          aria-required="true"
        />
        {errors.next && (
          <p id="next-error" className="field-error">
            {errors.next}
          </p>
        )}
      </div>

      {/* Spam trap for bots; hidden from people and assistive tech. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button type="submit" className="btn btn-primary sm:min-w-[240px]" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
        <p className="text-[14px] text-muted" aria-live="polite">
          {status === "submitting" ? "Sending your message." : "We use your details only to reply to you."}
        </p>
      </div>
    </form>
  );
}
