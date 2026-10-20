import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Contact Trigarty: tell us where you are and where you want to go.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Contact", title: "This is where we are. This is where we want to go." });
}
