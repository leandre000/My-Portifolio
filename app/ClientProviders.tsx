"use client";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { UserProvider } from "@/components/UserContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        {children}
        <Footer />
      </ThemeProvider>
    </UserProvider>
  );
} 