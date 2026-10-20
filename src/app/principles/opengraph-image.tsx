import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty principles: not a vendor, an extension of your team.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "PRINCIPLES", title: "Not a vendor. An extension of your team." });
}
