# VisQuanta SEO Regression Guardrails & Checklist

To maintain our **10/10 Enterprise SEO Score**, every new page or major architectural change must be verified against this checklist.

## 1. Metadata & Canonical Strategy (P0)
- [ ] **Title Tag:** 50–58 characters. Brand-last (`Primary Keyword | Brand`).
- [ ] **Meta Description:** 140–155 characters. Action-oriented, unique to the page.
- [ ] **Canonical URL:** Every indexable page MUST have a self-referencing canonical URL in `alternates.canonical`.
  - *Rule:* Use `https://visquanta.com/path` (no trailing slash).
- [ ] **OpenGraph:** Title, Description, and Image defined for social sharing.

## 2. URL Discovery & Sitemaps (P0)
- [ ] **Sitemap Registry:** If a new static route is added, update `src/app/sitemap.ts`.
- [ ] **Dynamic Routes:** If adding new dynamic content (e.g., new blog category), ensure the Seobot API or shared data module is updated and reflected in `sitemap.ts`.
- [ ] **Linking:** No "orphan" pages. Every page must be reachable via site navigation or internal links.

## 3. Structured Data / Schema.org (P1)
- [ ] **Breadcrumbs:** Every sub-page must implement `BreadcrumbList` JSON-LD.
- [ ] **Product/Service:** Main service pages should ideally have `Service` or `Product` schema.
- [ ] **Blog Posts:** Must have `Article` schema with correct author/publisher.
- [ ] **Verification:** Test new schemas with the [Schema Markup Validator](https://validator.schema.org/).

## 4. Crawl Control & Indexing (P1)
- [ ] **Error Pages:** 404 and 500 pages must have `robots: { index: false }`.
- [ ] **Admin/Private:** Any non-public routes must be disallowed in `src/app/robots.ts`.
- [ ] **Redirects:** Avoid chains. Any URL structure change must include a 301 redirect in `next.config.js`.

## 5. Performance as SEO (P2)
- [ ] **LCP Images:** Hero images must use `priority` prop in Next.js `<Image />`.
- [ ] **Cumulative Layout Shift (CLS):** Ensure all images have explicit dimensions.
- [ ] **Web Vitals:** Ensure Lighthouse SEO score remains at 100/100.

---

## Technical Guardrails (Automation)
Run the SEO audit script before every deployment:
```bash
npm run test:seo
```
*The script checks for missing canonicals, metadata length violations, and missing schema patterns.*
