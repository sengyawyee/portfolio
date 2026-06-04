"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import { navLinks, siteConfig } from "@/data/portfolio";

const SECTION_IDS = [
  ...navLinks.map((link) => link.href.replace("#", "")),
  "contact",
];
const HEADER_OFFSET = 96;
const ACTIVATION_OFFSET = 48;
const NAV_LOCK_MS = 900;

function resolveActiveHref(): string {
  const triggerLine = HEADER_OFFSET + ACTIVATION_OFFSET;

  for (let i = 0; i < SECTION_IDS.length; i++) {
    const id = SECTION_IDS[i];
    const section = document.getElementById(id);
    if (!section) continue;

    const top = section.getBoundingClientRect().top;
    const nextId = SECTION_IDS[i + 1];
    const nextSection = nextId ? document.getElementById(nextId) : null;
    const nextTop = nextSection?.getBoundingClientRect().top ?? Infinity;

    if (top <= triggerLine && nextTop > triggerLine) {
      return `#${id}`;
    }
  }

  const lastId = SECTION_IDS[SECTION_IDS.length - 1];
  const lastSection = document.getElementById(lastId);
  if (lastSection && lastSection.getBoundingClientRect().top <= triggerLine) {
    return `#${lastId}`;
  }

  return `#${SECTION_IDS[0]}`;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const navLockUntilRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveNav = () => {
      if (Date.now() < navLockUntilRef.current) {
        ticking = false;
        return;
      }

      setActiveHref((current) => {
        const next = resolveActiveHref();
        return next === current ? current : next;
      });
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveNav);
    };

    updateActiveNav();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = useCallback((href: string) => {
    navLockUntilRef.current = Date.now() + NAV_LOCK_MS;
    setActiveHref(href);
    closeMenu();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          scrolled
            ? "border-b border-border/90 bg-card/92 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            : "border-b border-white/[0.06] bg-deep-navy/25 py-4 backdrop-blur-md sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 sm:px-8 lg:px-12">
          <a
            href="#"
            className="group flex min-w-0 flex-1 items-center gap-3"
            onClick={closeMenu}
          >
            <BrandLogo size="header" className="transition-opacity group-hover:opacity-90" />
            <span className="min-w-0">
              <span
                className={`block truncate text-sm font-semibold tracking-tight transition-colors ${
                  scrolled
                    ? "text-navy group-hover:text-accent"
                    : "text-white group-hover:text-cyan"
                }`}
              >
                {siteConfig.name}
              </span>
              <span
                className={`block truncate text-xs font-medium sm:text-[11px] ${
                  scrolled ? "text-muted" : "text-muted-dark"
                }`}
              >
                {siteConfig.title}
              </span>
            </span>
          </a>

          <nav
            className="ml-auto hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? "text-accent"
                        : "text-muted hover:text-navy"
                      : isActive
                        ? "text-white"
                        : "text-muted-dark hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-px ${
                        scrolled ? "bg-accent/80" : "bg-cyan/70"
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="header-contact-cta ml-2 px-4 py-2 text-sm font-semibold"
              aria-current={activeHref === "#contact" ? "page" : undefined}
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className={`ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors xl:hidden ${
              menuOpen ? "pointer-events-none invisible" : ""
            } ${
              scrolled
                ? "border-border text-navy hover:border-accent/30 hover:bg-soft-blue"
                : "border-white/15 text-white hover:border-cyan/40 hover:bg-white/5"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            aria-hidden={menuOpen}
            tabIndex={menuOpen ? -1 : 0}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="mobile-command-menu fixed inset-0 z-[60] xl:hidden"
          role="presentation"
        >
          <nav
            id="mobile-menu"
            className="mobile-command-menu__panel hero-grid fixed inset-0 flex min-h-0 flex-col overflow-hidden bg-deep-navy/98 shadow-[inset_0_1px_0_rgba(56,189,248,0.12)] backdrop-blur-xl"
            aria-label="Mobile command menu"
          >
            <div className="shrink-0 border-b border-white/[0.08] px-6 pb-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan/90">
                Mobile Command Menu
              </p>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <BrandLogo size="menu" />
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold tracking-tight text-white">
                      {siteConfig.name}
                    </p>
                    <p className="truncate text-sm font-medium text-muted-dark">
                      {siteConfig.title}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-cyan/40 hover:bg-white/5"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 py-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-dark">
                Navigation
              </p>
              <ul className="mt-3 divide-y divide-white/[0.06]">
                {navLinks.map((link, index) => {
                  const isActive = activeHref === link.href;
                  const itemNumber = String(index + 1).padStart(2, "0");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`group relative flex min-h-[3.25rem] items-center gap-4 py-3.5 pl-2 pr-2 transition-colors ${
                          isActive
                            ? "text-cyan"
                            : "text-white/88 hover:bg-white/[0.03] hover:text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleNavClick(link.href)}
                      >
                        {isActive ? (
                          <span
                            className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                        ) : null}
                        <span
                          className={`w-7 shrink-0 font-mono text-xs tabular-nums ${
                            isActive ? "text-cyan/90" : "text-white/35"
                          }`}
                        >
                          {itemNumber}
                        </span>
                        <span className="min-w-0 flex-1 text-[1.0625rem] font-medium tracking-tight">
                          {link.label}
                        </span>
                        {isActive ? (
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_rgba(56,189,248,0.55)]"
                            aria-hidden="true"
                          />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="shrink-0 border-t border-white/[0.08] bg-deep-navy/80 px-6 py-5">
              <p className="text-xs leading-relaxed text-muted-dark">
                Open to Senior Frontend Developer opportunities
              </p>
              <a
                href="#contact"
                className="mt-4 flex w-full min-h-11 items-center justify-center rounded-lg border border-cyan/35 bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan/50 hover:bg-accent-hover"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
