import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-7xl mx-auto py-10">
        <Alert variant="destructive" className="mb-8 border dark:border-red-900/50 bg-red-50 dark:bg-red-950/50">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="text-lg font-semibold mb-1 dark:text-red-400">Development Mode Only</AlertTitle>
          <AlertDescription className="text-base dark:text-slate-400">
            This admin panel is only available in development mode. The data shown here
            comes from local files that are not available in production.
          </AlertDescription>
        </Alert>
        <main>{children}</main>
      </div>
    </div>
  );
}