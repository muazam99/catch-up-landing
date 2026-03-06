
"use client";

import { useState, FormEvent } from "react";

export default function SignupModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data: { message: string } = await res.json();

    setMessage(data.message);
    setEmail("");
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Join Early Testing
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-[350px] relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold mb-2">
              Join Qiyam Early Access
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Be among the first to test the app.
            </p>

            <form onSubmit={submitEmail} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>

            {message && (
              <p className="text-green-600 text-sm mt-4 text-center">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
