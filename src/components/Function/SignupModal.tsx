"use client";

import { FormEvent, ReactNode, useState } from "react";

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
import { Button } from "@/components/ui/button";

type SignupModalProps = {
  children: ReactNode;
};

export default function SignupModal({ children }: SignupModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: { message: string } = await res.json();

      setMessage(data.message);

      if (res.ok) {
        setEmail("");
      }
    } catch {
      setMessage("We could not send the email right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
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
            disabled={isSubmitting}
          />

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Sign Up"}
            </Button>
          </DialogFooter>
        </form>

        {message && <DialogDescription>{message}</DialogDescription>}
      </DialogContent>
    </Dialog>
  );
}
