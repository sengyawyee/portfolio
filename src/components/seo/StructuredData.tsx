import { getSiteUrl } from "@/lib/site-url";
import { getStructuredData } from "@/lib/structured-data";

export default function StructuredData() {
  const siteUrl = getSiteUrl();
  const structuredData = getStructuredData(siteUrl);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
