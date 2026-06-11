import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsEventName =
  | "download_cv"
  | "click_email"
  | "click_linkedin"
  | "view_project";

export type AnalyticsEventParams = Record<
  string,
  string | number | boolean
>;

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsEventParams = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sendGAEvent("event", eventName, params);
  } catch {
    // Analytics may be blocked by privacy settings or ad blockers.
  }
}
