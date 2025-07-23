"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useUser } from "@/components/UserContext"
import AuthForm from "@/components/AuthForm";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { user, setUser } = useUser()

  useEffect(() => {
    if (user) router.replace("/dashboard")
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy auth logic (replace with real API call)
    if (email && password && name) {
      const userObj = { email, name }
      localStorage.setItem("user", JSON.stringify(userObj))
      setUser(userObj)
      router.push("/dashboard")
    } else {
      setError("All fields are required")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="w-full max-w-md p-8 rounded-xl shadow bg-white dark:bg-black border border-black/10 dark:border-white/10 flex flex-col items-center">
        <Image src="/placeholder-logo.webp" alt="System Logo" width={80} height={80} className="mb-6 rounded-full object-contain w-24 h-24" priority />
        <h1 className="text-3xl font-bold mb-6 text-center font-sans">Login</h1>
        <AuthForm
          type="login"
          onSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
        >
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account? <Link href="/signup" className="underline hover:text-black dark:hover:text-white">Sign up</Link>
          </p>
        </AuthForm>
      </div>
    </div>
  )
} 