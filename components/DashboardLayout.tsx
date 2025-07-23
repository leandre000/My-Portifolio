// DashboardLayout: Shared layout for all dashboard pages
// Includes the Sidebar and a main content area
// Keeps code DRY and easy to update for all portals
import { Sidebar } from "@/components/ui/sidebar";
import React from "react";

// Usage: Wrap any dashboard page with <DashboardLayout>...</DashboardLayout>
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    // Flex row: sidebar on the left, main content on the right
    <div className="min-h-screen flex flex-row bg-white dark:bg-black">
      {/* Sidebar: navigation links for the portal */}
      <Sidebar />
      {/* Main content area: page-specific content goes here */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
    </div>
  );
} 