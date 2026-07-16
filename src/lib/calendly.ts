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
 * Primary US walkthrough CTA (team discovery call).
 */
export const CALENDLY_US =
  'https://calendly.com/d/cn4j-v36-b87/visquanta-discovery-call';

/** @deprecated Prefer CALENDLY_US — kept as alias for existing imports */
export const CALENDLY_URL = CALENDLY_US;

/** @deprecated Prefer CALENDLY_CA */
export const CALENDLY_DWAYNE = CALENDLY_CA;

/** Per-locale overrides for the global Calendly modal */
export const CALENDLY_LOCALE_OVERRIDES: Record<string, string> = {
  'en-CA': CALENDLY_CA,
};

/**
 * Calendly embed query params.
 *
 * Light theme is intentional: dark bg + white text makes form *inputs*
 * unreadable (Calendly keeps white input fields but inherits text_color).
 * Keep brand orange as primary.
 */
export const CALENDLY_EMBED_PARAMS =
  'hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=ff7404';

/** Build an embeddable Calendly URL with readable form styling. */
export function buildCalendlyEmbedUrl(
  baseUrl: string,
  extraParams?: Record<string, string>
): string {
  const url = new URL(baseUrl);
  const defaults = new URLSearchParams(CALENDLY_EMBED_PARAMS);
  defaults.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  if (extraParams) {
    for (const [key, value] of Object.entries(extraParams)) {
      if (value) url.searchParams.set(key, value);
    }
  }
  return url.toString();
}
