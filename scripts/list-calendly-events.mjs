/**
 * Temporary helper: list Calendly org event types via PAT.
 * Usage: node scripts/list-calendly-events.mjs
 * Reads token from .calendly-token.tmp (gitignored) or CALENDLY_TOKEN env.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const tokenPath = resolve(root, '.calendly-token.tmp');

const token = (
  process.env.CALENDLY_TOKEN ||
  (existsSync(tokenPath) ? readFileSync(tokenPath, 'utf8') : '')
).trim();

if (!token) {
  console.error('Missing CALENDLY_TOKEN or .calendly-token.tmp');
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

async function get(url) {
  const res = await fetch(url, { headers });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} ${url}`);
    err.body = body;
    throw err;
  }
  return body;
}

async function getAll(url) {
  const collection = [];
  let next = url;
  while (next) {
    const page = await get(next);
    collection.push(...(page.collection || []));
    next = page.pagination?.next_page || null;
  }
  return collection;
}

function schedulingUrl(et) {
  // Prefer profile slug + event slug for embed-friendly URLs
  const profileSlug = et.profile?.slug;
  const eventSlug = et.slug;
  if (profileSlug && eventSlug) {
    return `https://calendly.com/${profileSlug}/${eventSlug}`;
  }
  return et.scheduling_url || null;
}

try {
  const me = await get('https://api.calendly.com/users/me');
  const user = me.resource;
  const org = user.current_organization;
  console.log('Authenticated as:', user.name, user.email);
  console.log('User URI:', user.uri);
  console.log('Org URI:', org);

  const memberships = await getAll(
    `https://api.calendly.com/organization_memberships?organization=${encodeURIComponent(org)}&count=100`
  );
  console.log('\n=== Org members ===');
  for (const m of memberships) {
    const u = m.user;
    console.log(`- ${u.name} <${u.email}> role=${m.role} slug=${u.slug || 'n/a'}`);
  }

  // Active event types for whole org
  const eventTypes = await getAll(
    `https://api.calendly.com/event_types?organization=${encodeURIComponent(org)}&active=true&count=100`
  );

  console.log(`\n=== Active event types (${eventTypes.length}) ===`);
  const rows = eventTypes.map((et) => ({
    name: et.name,
    active: et.active,
    duration: et.duration,
    kind: et.pooling_type || et.kind || et.type,
    owner: et.profile?.name || et.profile?.owner || '',
    profile_slug: et.profile?.slug || '',
    event_slug: et.slug,
    scheduling_url: et.scheduling_url,
    public_url: schedulingUrl(et),
    uri: et.uri,
  }));

  // Sort: demos / discovery first
  rows.sort((a, b) => a.name.localeCompare(b.name));
  for (const r of rows) {
    console.log(
      `\n• ${r.name} (${r.duration}m) [${r.kind}] — ${r.owner || r.profile_slug}`
    );
    console.log(`  url: ${r.public_url || r.scheduling_url}`);
    console.log(`  scheduling_url: ${r.scheduling_url}`);
  }

  const outPath = resolve(root, 'scripts/calendly-event-types.out.json');
  writeFileSync(
    outPath,
    JSON.stringify({ user: { name: user.name, email: user.email, uri: user.uri, org }, memberships: memberships.map(m => ({ name: m.user.name, email: m.user.email, role: m.role, uri: m.user.uri, slug: m.user.slug })), eventTypes: rows }, null, 2),
    'utf8'
  );
  console.log(`\nWrote ${outPath}`);
} catch (e) {
  console.error('Failed:', e.message);
  if (e.body) console.error(JSON.stringify(e.body, null, 2));
  process.exit(1);
}
