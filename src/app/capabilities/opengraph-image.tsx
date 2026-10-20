import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty capabilities: six capabilities across the whole organization";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Capabilities", title: "Six capabilities across the whole organization." });
}
