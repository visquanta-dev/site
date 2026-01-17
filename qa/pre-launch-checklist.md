# 🚀 Pre-Launch QA Checklist

**Mandatory Gate:** This checklist must be completed before any deployment to production (`main` branch).

## 1. Build & Runtime Integrity
- [ ] **Clean Build:** `npm run build` succeeds locally without errors.
- [ ] **No Console Errors:** Browser console is free of critical JS errors on key pages (Home, Service Drive, Blog, Booking).
- [ ] **Type Safety:** No critical TypeScript errors ignored (`@ts-ignore`) without documented reason.

## 2. Link & Navigation Audit
- [ ] **Internal Links:** No broken internal links (404s).
- [ ] **External Links:** Key external links (partners, tools) open correctly in new tabs where appropriate.
- [ ] **Navigation:** Header and Footer navigation links work on Desktop and Mobile.
- [ ] **Redirects:** Critical redirects (e.g., from old pages) are functioning.

## 3. Functional Critical Paths
- [ ] **Booking Flow:** The "Book a Demo" wizard completes successfully.
- [ ] **Forms:** Contact/Lead forms submit correctly and show success states.
- [ ] **Voice Agent:** Service Drive Voice Agent launches and handles states (Ready, Listening, Ended) correctly.
- [ ] **Calculators:** ROI/Service calculators function and update values.

## 4. Visual & Responsive QA
- [ ] **Mobile Layout:** Verified on mobile width (375px+). No horizontal scrolls or broken overflows.
- [ ] **Tablets:** Verified on tablet breakpoints.
- [ ] **Images:** No broken images; key visuals behave correctly (lazy loading/priority).
- [ ] **Dark Mode:** (If applicable) UI remains legible and consistent.

## 5. SEO & Metadata
- [ ] **Meta Tags:** Title strings and Meta Descriptions are present on all core pages.
- [ ] **Open Graph:** OG Image and OG Data appear correctly on shared links (Slack/LinkedIn preview).
- [ ] **Sitemap:** `sitemap.xml` is generated and accessible.
- [ ] **Robots.txt:** Configured correctly to allow indexing (or disallow dev environments).

## 6. Performance & Analytics
- [ ] **Core Web Vitals:** No glaring layout shifts (CLS) on load.
- [ ] **Analytics:** GTM/GA4 tags are firing (verify in network tab).
- [ ] **Speed:** Key pages load under acceptable thresholds (LCP < 2.5s targeted).

## 7. Security
- [ ] **HTTPS:** All content served over HTTPS.
- [ ] **env variables:** No secrets exposed in client-side bundles.

## 8. Final Human Sign-off
- [ ] **Walkthrough:** A human has manually clicked through the primary user journey.
- [ ] **Stakeholder Approval:** Changes approved by product/design lead.

---
*By merging this code, I certify that I have validated the operational integrity of this release.*
