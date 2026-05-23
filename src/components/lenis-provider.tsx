// @ts-nocheck
"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
