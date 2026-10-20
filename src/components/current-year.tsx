"use client";

import { useEffect, useState } from "react";

/* Pages are prerendered, so the server value is the build year. The client
   corrects it on load in case the build is older than the visit. */
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span suppressHydrationWarning>{year}</span>;
}
