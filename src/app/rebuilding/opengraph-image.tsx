import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty organizational rebuilding: rebuild the organization around its next stage";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Organizational rebuilding", title: "Rebuild the organization around its next stage." });
}
