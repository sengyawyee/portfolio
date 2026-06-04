import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

type BrandLogoProps = {
  size?: "header" | "menu";
  className?: string;
};

const sizeMap = {
  header: { className: "h-9 w-9", width: 36, height: 36 },
  menu: { className: "h-10 w-10", width: 40, height: 40 },
};

export default function BrandLogo({
  size = "header",
  className = "",
}: BrandLogoProps) {
  const dimensions = sizeMap[size];

  return (
    <span
      className={`relative shrink-0 overflow-hidden rounded-lg border border-[#1d4ed8] ${dimensions.className} ${className}`}
    >
      <Image
        src={siteConfig.logoSrc}
        alt={`${siteConfig.name} logo`}
        width={dimensions.width}
        height={dimensions.height}
        className="h-full w-full object-contain"
        priority={size === "header"}
      />
    </span>
  );
}
