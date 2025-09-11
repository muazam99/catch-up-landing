'use client';
import Image from 'next/image';
import { useState } from 'react';

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
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <Image src="/app-icon.png" alt="App Logo" width={80} height={80} />
        <h2 style={{ margin: '16px 0 0 0', fontWeight: 700, color: '#000', textAlign: 'center' }}>Catch Up!</h2>
      </div>
      <h3 style={{ textAlign: 'center', marginBottom: 12, color: '#000' }}>Support</h3>
      <p style={{ textAlign: 'center', marginBottom: 24, color: '#000' }}>
        For faster support, send any questions and request directly to <a href="mailto:support@catchupmobility.com" style={{ color: '#0070f3' }}>support@catchupmobility.com</a>.
      </p>
      <form onSubmit={handleSend}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #000', color: '#000', background: '#fff', fontSize: 16 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #000', color: '#000', background: '#fff', fontSize: 16 }}
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={5}
          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #000', color: '#000', background: '#fff', fontSize: 16, marginBottom: 16 }}
        />
        <button
          type="submit"
          disabled={sending}
          style={{ width: '100%', padding: '12px 0', borderRadius: 6, background: '#0070f3', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16 }}
        >
          {sending ? 'Sending...' : 'Send'}
        </button>
        {sent && <p style={{ color: 'green', marginTop: 12 }}>Email client opened. Please send your email.</p>}
        {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
      </form>
    </div>
  );
}
