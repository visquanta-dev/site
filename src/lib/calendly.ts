/**
 * Central Calendly scheduling URLs for the marketing site.
 *
 * 2026-07-16: Primary AMS round-robin (cn5m-s6d-whf) and Dwayne's old
 * `/30min` slug are dead. Site-wide demos (US + CA) route to Dwayne's
 * active 30-minute event until a new team round-robin is provisioned.
 */

/** Dwayne Roemer — Director of Canadian Operations (active event) */
export const CALENDLY_DWAYNE =
  'https://calendly.com/droemer-visquanta/30-minute-meeting';

/**
 * Default / US walkthrough CTA.
 * Both en-US and en-CA use Dwayne until a sales round-robin is restored.
 */
export const CALENDLY_URL = CALENDLY_DWAYNE;

/** Per-locale overrides for the global Calendly modal (optional). */
export const CALENDLY_LOCALE_OVERRIDES: Record<string, string> = {
  'en-CA': CALENDLY_DWAYNE,
};
