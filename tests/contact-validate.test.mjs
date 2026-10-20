import { test } from "node:test";
import assert from "node:assert/strict";
import { EMPTY, MIN_DESCRIPTION, validate } from "../src/app/contact/validate.ts";

const valid = {
  ...EMPTY,
  name: "Asha Rao",
  email: "asha@company.com",
  orgType: "Startup",
  now: "Our systems do not connect and work is manual.",
  next: "One connected system the team can run itself.",
};

test("a complete submission has no errors", () => {
  assert.deepEqual(validate(valid), {});
});

test("an empty form flags every required field and nothing optional", () => {
  const e = validate(EMPTY);
  assert.deepEqual(Object.keys(e).sort(), ["email", "name", "next", "now", "orgType"]);
  assert.equal(e.organization, undefined);
  assert.equal(e.phone, undefined);
});

test("whitespace-only values count as empty", () => {
  const e = validate({ ...valid, name: "   ", email: "   " });
  assert.ok(e.name);
  assert.equal(e.email, "Enter your email address.");
});

test("email format", () => {
  for (const bad of ["asha", "asha@", "asha@company", "asha@company.c", "a sha@company.com"]) {
    assert.ok(validate({ ...valid, email: bad }).email, `expected "${bad}" to be rejected`);
  }
  for (const good of ["a@b.co", "first.last+tag@sub.domain.in", "  asha@company.com  "]) {
    assert.equal(validate({ ...valid, email: good }).email, undefined, `expected "${good}" to pass`);
  }
});

test("phone is optional but must look like a number when given", () => {
  assert.equal(validate({ ...valid, phone: "" }).phone, undefined);
  assert.equal(validate({ ...valid, phone: "+91 91336 65157" }).phone, undefined);
  assert.equal(validate({ ...valid, phone: "(040) 123-4567" }).phone, undefined);
  assert.ok(validate({ ...valid, phone: "call me" }).phone);
  assert.ok(validate({ ...valid, phone: "123" }).phone);
});

test("descriptions need the minimum length after trimming", () => {
  const short = "x".repeat(MIN_DESCRIPTION - 1);
  const exact = "x".repeat(MIN_DESCRIPTION);
  assert.ok(validate({ ...valid, now: short }).now);
  assert.ok(validate({ ...valid, next: `  ${short}  ` }).next);
  assert.equal(validate({ ...valid, now: exact }).now, undefined);
});
