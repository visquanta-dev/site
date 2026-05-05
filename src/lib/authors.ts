export interface Author {
  slug: string;
  name: string;
  title: string;
  short_title: string;
  company: string;
  photo: string;
  linkedin: string;
  profile_url: string;
  credential_line: string;
  bio: string;
  expertise: string[];
}

export const DEFAULT_AUTHOR_SLUG = 'william-voyles';

const AUTHORS: Record<string, Author> = {
  'william-voyles': {
    slug: 'william-voyles',
    name: 'William Voyles',
    title: 'Co-Founder & Chief Sales Officer',
    short_title: 'Co-Founder & CSO',
    company: 'VisQuanta',
    photo:
      'https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp',
    linkedin: 'https://www.linkedin.com/in/wvoyles/',
    profile_url: 'https://www.visquanta.com/team#william-voyles',
    credential_line:
      'Helping dealerships across North America uncover hidden revenue within their existing operations.',
    bio: [
      'William Voyles is Co-Founder and Chief Sales Officer at VisQuanta, where he leads go-to-market strategy for the AutoMaster Suite. With years of hands-on experience in automotive sales leadership, William has firsthand experience running the lead-handling and customer acquisition processes he now helps dealerships automate.',
      '',
      'At VisQuanta, William works directly with dealership owners and GMs across North America, overseeing deployments of speed-to-lead, lead reactivation, reputation management, and voice agent systems. His focus is helping dealerships recover revenue from existing customer databases and capture inbound leads faster than the competition.',
      '',
      'William writes about dealership sales strategy, lead response optimization, CRM workflow design, and the economics of automation adoption in automotive retail.',
    ].join('\n'),
    expertise: [
      'Dealership sales strategy',
      'Speed-to-lead response',
      'CRM optimization and lead reactivation',
      'Automotive retail operations',
      'Voice AI for sales use cases',
    ],
  },
  'clint-annis': {
    slug: 'clint-annis',
    name: 'Clint Annis',
    title: 'Service Drive Director of Implementations',
    short_title: 'Service Drive Director of Implementations',
    company: 'VisQuanta',
    photo: '/team/clint-annis.png',
    linkedin: '',
    profile_url: 'https://www.visquanta.com/team#clint-annis',
    credential_line:
      'Service Drive Director of Implementations at VisQuanta. Contact: cannis@visquanta.com.',
    bio: [
      'Clint Annis is Service Drive Director of Implementations at VisQuanta, where he helps dealerships deploy service-drive workflows, voice-agent coverage, and fixed-ops automation in live rooftop environments.',
      '',
      'Clint works with service managers and implementation teams to turn missed-call, appointment, and follow-up gaps into measurable operating processes.',
    ].join('\n'),
    expertise: [
      'Service drive implementation',
      'Fixed operations workflows',
      'Voice AI deployment',
      'Dealership service operations',
      'Customer follow-up process design',
    ],
  },
};

/**
 * Resolve an author by slug. Returns null for legacy posts whose `author`
 * field is either missing or a free-text string like "VisQuanta Team" — the
 * caller should fall back to the existing Organization-authored schema path
 * for those posts rather than silently retroactively attributing them to
 * the default author. Only posts that explicitly reference a registered
 * author slug get Person schema and a named byline.
 */
export function getAuthor(slugOrLegacy?: string): Author | null {
  if (slugOrLegacy && AUTHORS[slugOrLegacy]) return AUTHORS[slugOrLegacy];
  return null;
}

/**
 * Returns the default author unconditionally. Use this in contexts where a
 * fallback author is required (e.g. a dedicated /author page). Do NOT use
 * this for resolving a blog post's author — use getAuthor() instead so
 * legacy posts retain their existing Organization attribution.
 */
export function getDefaultAuthor(): Author {
  return AUTHORS[DEFAULT_AUTHOR_SLUG];
}

export function listAuthors(): Author[] {
  return Object.values(AUTHORS);
}
