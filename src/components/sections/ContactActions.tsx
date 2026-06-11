"use client";

import { ContactCTA } from "@/components/ui/ContactCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/data/portfolio";

function getFileNameFromPath(filePath: string): string {
  const fileName = filePath.split("/").pop();
  return fileName && fileName.length > 0 ? fileName : "Stephen-Seng-CV.pdf";
}

export default function ContactActions() {
  const cvFileName = getFileNameFromPath(siteConfig.cvUrl);

  return (
    <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:flex-nowrap lg:items-center">
      <ScrollReveal variant="fade-up" delay={0} className="w-full lg:w-auto lg:shrink-0">
        <ContactCTA
          variant="primary"
          className="w-full lg:w-auto"
          onClick={() => {
            trackEvent("click_email", { location: "contact_section" });
          }}
        >
          Email Me
        </ContactCTA>
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delay={90} className="w-full lg:w-auto lg:shrink-0">
        <ContactCTA
          variant="outlined"
          href={siteConfig.linkedin}
          className="w-full lg:w-auto"
          onClick={() => {
            trackEvent("click_linkedin", { location: "contact_section" });
          }}
        >
          LinkedIn
        </ContactCTA>
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delay={180} className="w-full lg:w-auto lg:shrink-0">
        <ContactCTA
          href={siteConfig.cvUrl}
          variant="ghost"
          download
          className="w-full lg:w-auto"
          onClick={() => {
            trackEvent("download_cv", {
              location: "contact_section",
              file_name: cvFileName,
            });
          }}
        >
          Download CV
        </ContactCTA>
      </ScrollReveal>
    </div>
  );
}
