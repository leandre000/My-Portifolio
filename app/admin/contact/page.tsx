import { Metadata } from "next";
import { getContactSubmissions } from "../actions";
import { SubmissionsTable } from "@/components/admin/submissions-table";

export const metadata: Metadata = {
  title: "Contact Submissions Admin | Development Only",
  description: "View contact form submissions (development environment only)",
};

export default async function ContactSubmissionsPage() {
  const submissions = await getContactSubmissions();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Submissions</h1>
        <p className="text-muted-foreground mt-2">
          View submissions from the contact form that were saved during development.
          Submissions are stored in <code className="font-mono">data/contact-submissions.json</code>.
        </p>
      </div>

      <SubmissionsTable submissions={submissions} />
    </div>
  );
}