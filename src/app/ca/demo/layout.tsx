// src/app/ca/demo/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Dealership AI Demo | VisQuanta Canada",
  description: "Test VisQuanta's live dealership AI for Canada. Try our SMS Lead Reactivation and Voice AI Receptionist instantly.",
};

export default function CADemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
