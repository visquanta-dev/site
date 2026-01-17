# VisQuanta Production Repository

This is the production repository for ViewQuanta SaaS.

## 🛑 PRODUCTION DEPLOYMENT GATE

**STRICT QA REQUIRED:** No code may be merged to `main` or deployed to production without completing the **Pre-Launch Checklist**.

- 📄 **Checklist Location:** [`/qa/pre-launch-checklist.md`](./qa/pre-launch-checklist.md)
- 🧪 **QA Artefacts:** See the [`/qa`](./qa) directory for audit reports and test logs.
- 🚫 **Deploy Rule:** Pull Requests MUST use the provided template and acknowledge QA validation using the checklist.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src` - Application source code.
- `/qa` - **QA Gates, Audit Reports, and Checklists**.
- `/public` - Static assets.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
