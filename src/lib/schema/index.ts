// src/lib/schema/index.ts
// Central export for all schema modules

export { baseSchema, organizationSchema, websiteSchema } from "./base";
export {
    homepageSchema,
    webPageSchema,
    softwareApplicationSchema
} from "./homepage";

// =============================================================================
// USAGE GUIDE
// =============================================================================
//
// LAYOUT.TSX (Site-Wide):
// Import baseSchema and inject via single <script> tag
// This adds Organization + WebSite schema to every page
//
// PAGE.TSX (Per-Page):
// Import page-specific schema and inject via <Script> component
// Each page can have its own WebPage, Product, FAQ, etc.
//
// EXAMPLE STRUCTURE:
//
// layout.tsx
//   └── baseSchema (@graph: Organization, WebSite)
//
// page.tsx (homepage)
//   └── homepageSchema (@graph: WebPage, SoftwareApplication, FAQPage)
//
// products/speed-to-lead/page.tsx
//   └── speedToLeadSchema (@graph: WebPage, Product, FAQPage)
//
// blog/[slug]/page.tsx
//   └── blogPostSchema (@graph: BlogPosting, BreadcrumbList)
//
// =============================================================================
//
// CREATING NEW PAGE SCHEMAS:
//
// 1. Create file: src/lib/schema/[page-name].ts
// 2. Export schema object with @graph array
// 3. Import in page.tsx and inject via <Script>
// 4. Add export to this index file
//
// =============================================================================
