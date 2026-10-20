import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty works with organizations across the lifecycle, from an idea to a legacy enterprise.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "WHO WE WORK WITH", title: "From an idea to a legacy enterprise." });
}
