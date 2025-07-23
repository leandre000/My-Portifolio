"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/components/UserContext"
import { Sidebar } from "@/components/ui/sidebar"
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  const { user, logout } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.replace("/login")
  }, [user, router])

  if (!user) return null

  return (
    <DashboardLayout>
      <div className="rounded-lg overflow-hidden shadow bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, <span className="text-blue-600 dark:text-blue-400">{user.name}</span>!</h1>
        <p className="text-lg text-black/70 dark:text-white/70 mb-4">This is your dashboard. Here you can manage your profile, view your projects, and more.</p>
        <button onClick={logout} className="mt-4 px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-900 dark:hover:bg-gray-200 transition">Logout</button>
      </div>
    </DashboardLayout>
  )
} 