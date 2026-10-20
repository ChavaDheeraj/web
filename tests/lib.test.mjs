import { test } from "node:test";
import assert from "node:assert/strict";
import { SPECTRUM, pad, spectrumAt, spectrumSegment, spectrumStep } from "../src/lib/brand.ts";
import { SITE, mailto } from "../src/lib/site.ts";

test("spectrumAt returns the logo's end colours and clamps out-of-range input", () => {
  assert.equal(spectrumAt(0).toLowerCase(), SPECTRUM[0].toLowerCase());
  assert.equal(spectrumAt(1).toLowerCase(), SPECTRUM.at(-1).toLowerCase());
  assert.equal(spectrumAt(-2), spectrumAt(0));
  assert.equal(spectrumAt(9), spectrumAt(1));
  assert.match(spectrumAt(0.37), /^#[0-9a-f]{6}$/);
});

test("spectrumStep spreads evenly and handles a single item", () => {
  assert.equal(spectrumStep(0, 1), spectrumAt(0));
  assert.equal(spectrumStep(6, 7), spectrumAt(1));
});

test("adjacent spectrum segments share their joining colour", () => {
  const a = spectrumSegment(2, 7);
  const b = spectrumSegment(3, 7);
  const end = a.match(/#[0-9a-f]{6}/g).at(-1);
  const start = b.match(/#[0-9a-f]{6}/g)[0];
  assert.equal(end, start);
});

test("pad", () => {
  assert.equal(pad(3), "03");
  assert.equal(pad(12), "12");
});

test("mailto encodes subject and body as %20, not +", () => {
  const url = mailto("Application: Product & Design", "Line one\nRole: A+B", SITE.careersEmail);
  assert.ok(url.startsWith(`mailto:${SITE.careersEmail}?`));
  assert.ok(!url.includes("+"), url);
  const params = new URLSearchParams(url.split("?")[1]);
  assert.equal(params.get("subject"), "Application: Product & Design");
  assert.equal(params.get("body"), "Line one\nRole: A+B");
});

test("mailto without parameters is a bare address", () => {
  assert.equal(mailto(), `mailto:${SITE.email}`);
});
