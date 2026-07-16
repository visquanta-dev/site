/**
 * Central Calendly scheduling URLs for the marketing site.
 *
 * Locale routing:
 * - en-US (default) → CALENDLY_US
 * - en-CA → CALENDLY_CA (Dwayne Roemer)
 *
 * 2026-07-16: Old AMS round-robin (cn5m-s6d-whf) is dead.
 * Dwayne's old `/30min` slug is dead; active slug is `30-minute-meeting`.
 */

/** Dwayne Roemer — Director of Canadian Operations (Canada only) */
export const CALENDLY_CA =
  'https://calendly.com/droemer-visquanta/30-minute-meeting';

/**
 * Primary US walkthrough CTA.
 * TODO: replace with the official US sales / team scheduling link when ready.
 * Interim: William Voyles discovery call (active, sales-facing).
 */
export const CALENDLY_US =
  'https://calendly.com/william-visquanta/visquanta-discovery-call';

/** @deprecated Prefer CALENDLY_US — kept as alias for existing imports */
export const CALENDLY_URL = CALENDLY_US;

/** @deprecated Prefer CALENDLY_CA */
export const CALENDLY_DWAYNE = CALENDLY_CA;

/** Per-locale overrides for the global Calendly modal */
export const CALENDLY_LOCALE_OVERRIDES: Record<string, string> = {
  'en-CA': CALENDLY_CA,
};
