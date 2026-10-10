import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og-image";

export const alt = "USCalculator.net — Free Online Calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        title="Free Online Calculators"
        subtitle="Finance · Fitness · Math · Everyday tools"
      />
    ),
    size
  );
}
