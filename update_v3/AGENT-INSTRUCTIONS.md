# VisQuanta Sitemap Fix — Agent Implementation Brief

## Problem

The sitemap at https://www.visquanta.com/sitemap.xml is broken. Google Search Console returns "Sitemap could not be read — HTTP Error: 503". This started when /ca/ locale pages were added — the sitemap doubled in size (157 URLs), the route handler makes external API calls that timeout on Vercel's serverless functions, and Next.js 16 may be interfering with XML content-type on the route.

## Solution

Replace the dynamic `src/app/sitemap.xml/route.ts` with a **static `public/sitemap.xml` file**. This completely bypasses Next.js route handling, makes zero API calls, and is served directly by Vercel's CDN as a static asset.

The static sitemap contains **US pages only** (no /ca/ URLs). Google discovers CA pages via the `<link rel="alternate" hreflang="en-CA">` tags already in the `<head>` of every page. Sitemap hreflang is a redundant secondary signal — on-page hreflang tags are the primary mechanism.

## Files

You need TWO files from this package:

1. `sitemap.xml` → Copy to `public/sitemap.xml`
2. `route.ts` → This is a fallback if the static approach has a conflict. See Step 3.

## Step-by-Step

### Step 1: Delete the dynamic sitemap route

Delete the entire directory:

```
src/app/sitemap.xml/
```

This removes the route handler that was making API calls and timing out. If there's also a `src/app/sitemap.ts` file (Next.js built-in sitemap), delete that too — it would conflict with the static file.

Also check for and delete:
- `src/app/sitemap.ts`
- `src/app/sitemap/route.ts`
- Any other sitemap-generating file in `src/app/`

### Step 2: Place the static sitemap

Copy the provided `sitemap.xml` to `public/sitemap.xml`.

Vercel serves files from `public/` as static assets at the root URL. So `public/sitemap.xml` becomes `https://www.visquanta.com/sitemap.xml` — no Next.js involvement.

### Step 3: Check for conflicts

After placing `public/sitemap.xml`, run `npm run dev` and visit `http://localhost:3000/sitemap.xml`.

**If it renders as proper XML** (you see the XML tree in the browser with expandable nodes): ✅ You're done. Skip to Step 5.

**If it renders as flat text** (all on one line, no formatting): There's still a Next.js route intercepting. Check:
- Is there still a file in `src/app/sitemap.xml/` or `src/app/sitemap.ts`?
- Is `next.config.ts` rewriting `/sitemap.xml` to something else?

**If the static file doesn't work at all** (404 or the old broken version still shows): Use the `route.ts` fallback instead. Create `src/app/sitemap.xml/route.ts` and paste the contents of the provided `route.ts`. This is a zero-API-call route handler that builds XML from hardcoded arrays.

### Step 4: Verify the XML

The sitemap should contain exactly **95 URLs** (42 pages + 53 blog posts). No `/ca/` URLs. Verify:

```bash
# Count URLs
grep -c '<loc>' public/sitemap.xml
# Should output: 95

# Confirm no CA URLs
grep '/ca/' public/sitemap.xml
# Should output nothing
```

### Step 5: Update robots.txt

Check `public/robots.txt`. It should reference the sitemap:

```
Sitemap: https://www.visquanta.com/sitemap.xml
```

If robots.txt has multiple `User-Agent` lines stacked before directives, fix it so each bot gets its own block:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Disallow: /

Sitemap: https://www.visquanta.com/sitemap.xml
```

### Step 6: Deploy

Deploy to Vercel with **Clear Build Cache** enabled.

After deploy, verify:
1. `curl -I https://www.visquanta.com/sitemap.xml` — should return `200` with `Content-Type: application/xml` (or `text/xml`)
2. Open `https://www.visquanta.com/sitemap.xml` in browser — should render as formatted XML
3. In Google Search Console, resubmit the sitemap

---

## Important Notes

- **Do NOT add /ca/ URLs back to the sitemap.** The CA pages are discovered via hreflang tags in `<head>`. This is Google's recommended approach.
- **When adding new blog posts:** Edit `public/sitemap.xml` and add a `<url>` entry. Or if using the route.ts fallback, add to the `blogPosts` array.
- **The existing /ca/ pages, hreflang tags, and locale routing are unchanged.** This fix only touches the sitemap and robots.txt.
- **The blog pages still use SEOBot API** for content. This fix only removes the SEOBot dependency from the sitemap, not from the blog page components.
