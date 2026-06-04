import { setConsoleFunction } from "three";

let isConfigured = false;

/**
 * R3F still uses THREE.Clock internally. Three r183+ logs a deprecation
 * warning — ESM exports cannot be replaced, so we filter that one message.
 */
export function configureThreeConsole() {
  if (isConfigured || typeof window === "undefined") return;
  isConfigured = true;

  setConsoleFunction((type, message, ...params) => {
    if (
      type === "warn" &&
      typeof message === "string" &&
      message.includes("Clock") &&
      message.includes("Timer")
    ) {
      return;
    }

    if (type === "log") {
      console.log(message, ...params);
      return;
    }

    if (type === "warn") {
      console.warn(message, ...params);
      return;
    }

    console.error(message, ...params);
  });
}

configureThreeConsole();
