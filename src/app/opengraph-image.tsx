import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty: Build what's next. An embedded transformation and building company in Hyderabad.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Embedded transformation and building", title: "Build what's next." });
}
