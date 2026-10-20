/* Contact form fields and validation. Kept free of React and imports so the rules
   can be unit-tested directly (see tests/contact-validate.test.mjs). */

export type Fields = {
  name: string;
  email: string;
  organization: string;
  phone: string;
  orgType: string;
  now: string;
  next: string;
};
export type FieldName = keyof Fields;
export type Errors = Partial<Record<FieldName, string>>;

export const EMPTY: Fields = { name: "", email: "", organization: "", phone: "", orgType: "", now: "", next: "" };

export const MIN_DESCRIPTION = 20;

export function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter an email address in the format name@company.com.";
  if (v.phone.trim() && !/^\+?[\d\s()-]{7,20}$/.test(v.phone.trim())) e.phone = "Enter a phone number using digits, spaces and an optional +.";
  if (!v.orgType) e.orgType = "Choose the option that fits best.";
  if (v.now.trim().length < MIN_DESCRIPTION) e.now = `Tell us a little more about where you are now (at least ${MIN_DESCRIPTION} characters).`;
  if (v.next.trim().length < MIN_DESCRIPTION) e.next = `Tell us a little more about where you want to go (at least ${MIN_DESCRIPTION} characters).`;
  return e;
}
