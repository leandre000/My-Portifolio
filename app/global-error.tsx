"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  console.error("Global app error:", error)
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-2">Unexpected Error</h1>
            <p className="text-black/60 dark:text-white/60 mb-6">A client-side exception occurred. Please retry.</p>
            <Button onClick={() => reset()} className="bg-blue-600 hover:bg-blue-700 text-white">Reload</Button>
          </div>
        </div>
      </body>
    </html>
  )
}


