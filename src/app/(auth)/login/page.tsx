"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Login attempted: ${email}`);
  }

  return (
    <div className="max-w-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>
          <div className="text-sm mb-1">Email</div>
          <input
            className="w-full rounded border px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <div className="text-sm mb-1">Password</div>
          <input
            type="password"
            className="w-full rounded border px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-600 text-white px-3 py-2 rounded"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
