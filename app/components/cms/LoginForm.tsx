"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      /*
       * Login berhasil.
       *
       * Server sudah membuat machwana_session cookie.
       * Gunakan full browser navigation agar cookie langsung
       * digunakan saat membuka dashboard production.
       */
      window.location.href = "/cms/dashboard";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }

      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="
            w-full
            mt-2
            border
            rounded-lg
            px-4
            py-3
          "
        />
      </div>

      <div>
        <label className="block text-sm">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="
            w-full
            mt-2
            border
            rounded-lg
            px-4
            py-3
          "
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-orange-500
          text-white
          rounded-lg
          py-3
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}