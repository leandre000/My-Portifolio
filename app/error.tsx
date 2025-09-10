"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error("App error:", error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-black/60 dark:text-white/60 mb-6">An unexpected error occurred while rendering this page. Try again.</p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => reset()} className="bg-blue-600 hover:bg-blue-700 text-white">Reload</Button>
          <a href="/" className="px-4 py-2 rounded border">Go Home</a>
        </div>
      </div>
    </div>
  )
}


