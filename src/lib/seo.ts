import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";

export const siteTitle = "Stephen Seng — Senior Frontend Developer";

export const siteDescription =
  "Senior Frontend Developer based in Malaysia with 12+ years of experience building responsive websites, Vue / Nuxt interfaces, corporate websites, eCommerce UI, annual report websites, CMS-driven platforms, and production-ready frontend experiences.";

export const twitterDescription =
  "Senior Frontend Developer based in Malaysia with 12+ years of responsive UI, Vue / Nuxt, React / Next.js, eCommerce, and corporate website frontend experience.";

const ogImagePath = path.join(process.cwd(), "public", "og-image.png");

export const hasOgImage = fs.existsSync(ogImagePath);

export function buildSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  const openGraph: Metadata["openGraph"] = {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Stephen Seng Portfolio",
    locale: "en_MY",
    url: siteUrl,
  };

  if (hasOgImage) {
    openGraph.images = [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ];
  }

  const twitter: Metadata["twitter"] = {
    card: "summary_large_image",
    title: siteTitle,
    description: twitterDescription,
  };

  if (hasOgImage) {
    twitter.images = ["/og-image.png"];
  }

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteTitle,
      template: "%s | Stephen Seng",
    },
    description: siteDescription,
    keywords: [
      "Stephen Seng",
      "Senior Frontend Developer",
      "Frontend Developer Malaysia",
      "Vue Developer",
      "Nuxt Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Responsive UI",
      "Figma to Code",
      "Corporate Websites",
      "eCommerce Frontend",
      "Frontend Portfolio",
    ],
    authors: [{ name: "Stephen Seng" }],
    creator: "Stephen Seng",
    publisher: "Stephen Seng",
    category: "portfolio",
    alternates: {
      canonical: "/",
    },
    openGraph,
    twitter,
    manifest: "/manifest.json",
    icons: {
      icon: [
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          url: "/favicon/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      shortcut: "/favicon/favicon.ico",
      apple: [
        {
          url: "/favicon/apple-icon-57x57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-114x114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          url: "/favicon/apple-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    other: {
      "msapplication-TileColor": "#ffffff",
      "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
      "msapplication-config": "/favicon/browserconfig.xml",
    },
  };
}
