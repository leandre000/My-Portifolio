"use client";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { MouseTrail } from "@/components/mouse-trail";
import Footer from "@/components/footer";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Navigation />
      <MouseTrail />
      {children}
      <Footer />
    </ThemeProvider>
  );
} 