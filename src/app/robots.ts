import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const isLocalhost =
    siteUrl.startsWith("http://localhost") ||
    siteUrl.startsWith("http://127.0.0.1");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: isLocalhost ? undefined : siteUrl,
  };
}
