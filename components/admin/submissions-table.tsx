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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-[400px]">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedSubmissions.map((submission, index) => (
            <TableRow key={submission.timestamp + index}>
              <TableCell className="font-mono text-sm">
                {formatDistanceToNow(new Date(submission.timestamp), { addSuffix: true })}
              </TableCell>
              <TableCell>{submission.name}</TableCell>
              <TableCell>
                <a 
                  href={`mailto:${submission.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {submission.email}
                </a>
              </TableCell>
              <TableCell className="max-w-[400px] truncate">
                {submission.message}
              </TableCell>
            </TableRow>
          ))}
          {sortedSubmissions.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                No submissions found in data/contact-submissions.json
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}