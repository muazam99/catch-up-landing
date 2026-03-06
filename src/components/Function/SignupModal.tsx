"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-15 h-13 w-60 text-2xl font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          Join Early Testing
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Qiyam Early Access</DialogTitle>
          <DialogDescription>
            Be among the first to test the app and hear when the first version is ready.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submitEmail} className="space-y-4">
          <Input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <DialogFooter>
            <Button type="submit">
              Sign Up
            </Button>
          </DialogFooter>
        </form>

        {message && <DialogDescription>{message}</DialogDescription>}
      </DialogContent>
    </Dialog>
  );
}
