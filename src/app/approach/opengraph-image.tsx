import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty approach: we start with your objective, not a service menu.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "APPROACH", title: "We start with your objective, not a service menu." });
}
