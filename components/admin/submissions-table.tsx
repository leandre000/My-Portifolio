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

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface SubmissionsTableProps {
  submissions: ContactSubmission[];
}

export function SubmissionsTable({ submissions }: SubmissionsTableProps) {
  const sortedSubmissions = [...submissions].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
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
          {sortedSubmissions.map((submission, index) => (
            <TableRow 
              key={submission.timestamp + index}
              className="hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
            >
              <TableCell className="font-mono text-sm text-slate-500 dark:text-slate-400">
                {formatDistanceToNow(new Date(submission.timestamp), { addSuffix: true })}
              </TableCell>
              <TableCell className="text-slate-700 dark:text-slate-300">
                {submission.name}
              </TableCell>
              <TableCell>
                <a 
                  href={`mailto:${submission.email}`}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {submission.email}
                </a>
              </TableCell>
              <TableCell className="max-w-[400px] truncate text-slate-600 dark:text-slate-400">
                {submission.message}
              </TableCell>
            </TableRow>
          ))}
          {sortedSubmissions.length === 0 && (
            <TableRow>
              <TableCell 
                colSpan={4} 
                className="h-32 text-center text-slate-500 dark:text-slate-400"
              >
                No submissions found in data/contact-submissions.json
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}