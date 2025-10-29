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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Contact Submissions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          View submissions from the contact form that were saved during development.
          Submissions are stored in <code className="px-2 py-1 text-sm font-mono bg-slate-100 dark:bg-slate-800 rounded">data/contact-submissions.json</code>.
        </p>
      </div>

      <SubmissionsTable submissions={submissions} />
    </div>
  );
}