import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-8">
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Development Mode Only</AlertTitle>
        <AlertDescription>
          This admin panel is only available in development mode. The data shown here
          comes from local files that are not available in production.
        </AlertDescription>
      </Alert>
      {children}
    </div>
  );
}