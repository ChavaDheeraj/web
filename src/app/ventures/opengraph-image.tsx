import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Trigarty Ventures and IP: solving problems builds capability, IP and ventures.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "VENTURES AND IP", title: "Solving problems builds capability, IP and ventures." });
}
