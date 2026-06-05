"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const SCROLL_THRESHOLD = 480;

function subscribeNoop() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

function getScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(getScrollY() >= SCROLL_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!isClient) {
    return null;
  }

  const button = (
    <button
      type="button"
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
      className={`scroll-to-top-btn bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-6${visible ? " scroll-to-top-btn--visible" : ""}`}
    >
      <span className="scroll-to-top-btn__icon" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="8.25"
            stroke="currentColor"
            strokeWidth="1.15"
            opacity="0.4"
          />
          <path
            d="M12 15V9M9 11.5L12 9l3 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );

  return createPortal(button, document.body);
}
