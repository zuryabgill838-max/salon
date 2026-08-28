"use client";

import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Admin Login
    if (
      role === "admin" &&
      email === "admin@luxesalon.com" &&
      password === "admin123"
    ) {
      window.location.href = "/dashboard";
      return;
    }

    // Worker Login
    if (
      role === "worker" &&
      email === "worker@luxesalon.com" &&
      password === "worker123"
    ) {
      window.location.href = "/worker-dashboard";
      return;
    }

    setMessage("Invalid email or password.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        {/* Logo */}
        <div className="text-center">

          <h1 className="text-3xl font-bold text-pink-600">
            Luxe Salon
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your account
          </p>

        </div>

        {/* Role Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={() => {
              setRole("admin");
              setMessage("");
            }}
            className={`rounded-xl px-4 py-3 font-semibold ${
              role === "admin"
                ? "bg-pink-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            👑 Admin
          </button>

          <button
            type="button"
            onClick={() => {
              setRole("worker");
              setMessage("");
            }}
            className={`rounded-xl px-4 py-3 font-semibold ${
              role === "worker"
                ? "bg-pink-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            👩 Worker
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                role === "admin"
                  ? "admin@luxesalon.com"
                  : "worker@luxesalon.com"
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Error */}
          {message && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Login as {role === "admin" ? "Admin" : "Worker"}
          </button>

        </form>

        {/* Demo Credentials */}
        <div className="mt-8 rounded-2xl bg-gray-50 p-4">

          <p className="text-sm font-bold text-gray-700">
            Demo Login
          </p>

          {role === "admin" ? (
            <div className="mt-2 text-sm text-gray-500">
              <p>Email: admin@luxesalon.com</p>
              <p>Password: admin123</p>
            </div>
          ) : (
            <div className="mt-2 text-sm text-gray-500">
              <p>Email: worker@luxesalon.com</p>
              <p>Password: worker123</p>
            </div>
          )}

        </div>

      </div>

    </main>
  );
}