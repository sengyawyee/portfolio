import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="section-surface-base border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="text-sm font-semibold text-navy">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted sm:text-right">
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
