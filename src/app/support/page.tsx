"use client";
import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    try {
      const mailto = `mailto:support@catchupmobility.com?subject=Support%20Request%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
      window.location.href = mailto;
      setSent(true);
    } catch (err) {
      setError('Failed to open email client.');
    }
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <Card className="w-full max-w-md mx-auto p-8">
        <div className="flex flex-col items-center mb-6">
          <Image src="/app-icon.png" alt="App Logo" width={80} height={80} className="mx-auto" />
          <h2 className="mt-4 font-bold text-2xl text-black text-center">Catch Up!</h2>
        </div>
        <h3 className="text-xl font-semibold text-center text-black mb-2">Support</h3>
        <p className="text-center text-black mb-6">
          For faster support, send any questions and request directly to{' '}
          <a href="mailto:support@catchupmobility.com" className="text-primary underline">support@catchupmobility.com</a>.
        </p>
        <form onSubmit={handleSend} className="space-y-4">
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-1"
            />
          </div>
          <Textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full"
          />
          <Button type="submit" disabled={sending} className="w-full">
            {sending ? "Sending..." : "Send"}
          </Button>
          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </form>
      </Card>
    </div>
  );
}
