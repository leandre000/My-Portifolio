"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { SearchBar } from "./search-bar";

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface SubmissionsTableProps {
  submissions: ContactSubmission[];
}

function HighlightedText({ text, searchTerm }: { text: string; searchTerm: string }) {
  if (!searchTerm) return <>{text}</>;
  
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={i} className="bg-yellow-100 dark:bg-yellow-900/50 rounded px-0.5">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export function SubmissionsTable({ submissions }: SubmissionsTableProps) {
  const [search, setSearch] = React.useState("");
  
  const filteredAndSorted = React.useMemo(() => {
    const filtered = search
      ? submissions.filter(
          (submission) =>
            submission.name.toLowerCase().includes(search.toLowerCase()) ||
            submission.email.toLowerCase().includes(search.toLowerCase()) ||
            submission.message.toLowerCase().includes(search.toLowerCase())
        )
      : submissions;

    return filtered.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }, [submissions, search]);

  return (
    <div className="space-y-4">
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search by name, email, or message content..."
      />
      
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-slate-100/50 dark:hover:bg-slate-800/50">
              <TableHead className="text-slate-600 dark:text-slate-400">Time</TableHead>
              <TableHead className="text-slate-600 dark:text-slate-400">Name</TableHead>
              <TableHead className="text-slate-600 dark:text-slate-400">Email</TableHead>
              <TableHead className="text-slate-600 dark:text-slate-400 w-[400px]">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSorted.map((submission: ContactSubmission, index: number) => (
              <TableRow 
                key={submission.timestamp + index}
                className="hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              >
                <TableCell className="font-mono text-sm text-slate-500 dark:text-slate-400">
                  {formatDistanceToNow(new Date(submission.timestamp), { addSuffix: true })}
                </TableCell>
                <TableCell className="text-slate-700 dark:text-slate-300">
                  <HighlightedText text={submission.name} searchTerm={search} />
                </TableCell>
                <TableCell>
                  <a 
                    href={`mailto:${submission.email}`}
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    <HighlightedText text={submission.email} searchTerm={search} />
                  </a>
                </TableCell>
                <TableCell className="max-w-[400px] truncate text-slate-600 dark:text-slate-400">
                  <HighlightedText text={submission.message} searchTerm={search} />
                </TableCell>
              </TableRow>
            ))}
            {filteredAndSorted.length === 0 && (
              <TableRow>
                <TableCell 
                  colSpan={4} 
                  className="h-32 text-center text-slate-500 dark:text-slate-400"
                >
                  {search ? (
                    <>No submissions match your search for &quot;{search}&quot;</>
                  ) : (
                    <>No submissions found in data/contact-submissions.json</>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}