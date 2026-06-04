import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export default function AboutPortrait() {
  return (
    <div className="relative mx-auto h-[9.5rem] w-[9.5rem] shrink-0 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
      <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-slate-100 shadow-[0_20px_48px_rgba(15,23,42,0.2)] ring-4 ring-accent/12 lg:ring-[5px] lg:ring-accent/15">
        <Image
          src={siteConfig.portraitSrc}
          alt="Stephen Seng"
          fill
          sizes="(max-width: 1024px) 160px, 170px"
          className="object-cover [object-position:center_24%]"
          priority
        />
      </div>
    </div>
  );
}
