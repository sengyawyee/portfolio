import { siteConfig } from "@/data/portfolio";
import { siteDescription } from "@/lib/seo";

const knowsAbout = [
  "Frontend Development",
  "Responsive Web Design",
  "Vue.js",
  "Nuxt.js",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Figma to Code",
  "Corporate Websites",
  "eCommerce Frontend",
];

export function getStructuredData(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        url: siteUrl,
        email: `mailto:${siteConfig.email}`,
        sameAs: [siteConfig.linkedin],
        knowsAbout,
        address: {
          "@type": "Country",
          name: siteConfig.location,
        },
      },
      {
        "@type": "WebSite",
        name: "Stephen Seng Portfolio",
        url: siteUrl,
        description: siteDescription,
      },
    ],
  };
}
