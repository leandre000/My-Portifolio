import React from "react";

type AuthFormProps = {
  type: "login" | "signup";
  onSubmit: (e: React.FormEvent) => void;
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  error: string;
  children?: React.ReactNode;
};

export default function AuthForm({
  type,
  onSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  error,
  children,
}: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 rounded border"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded border"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded border"
          placeholder={type === "signup" ? "Create a password" : "Enter your password"}
        />
      </div>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}
      <button type="submit" className="w-full py-2 rounded bg-black text-white font-semibold hover:bg-gray-900 transition">
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
      {children}
    </form>
  );
} 