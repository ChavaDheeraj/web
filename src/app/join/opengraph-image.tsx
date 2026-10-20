import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Join Trigarty: open roles across business, product, engineering and ventures";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "JOIN THE TEAM", title: "Join the team that builds inside organizations." });
}
