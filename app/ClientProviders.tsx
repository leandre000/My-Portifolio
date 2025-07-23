"use client";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { MouseTrail } from "@/components/mouse-trail";
import Footer from "@/components/footer";
import { UserProvider } from "@/components/UserContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        {/* Always show the navigation bar at the top */}
        <Navigation />
        <MouseTrail />
        {children}
        <Footer />
      </ThemeProvider>
    </UserProvider>
  );
} 