"use client";

import { useState } from "react";

type Status = "idle" | "success" | "error";

export default function ContactForm() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("Bug Report");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    if (!emailRe.test(email)) { setStatus("error"); return; }
    // In production: POST to your API route / email service (Resend, SendGrid, etc.)
    setStatus("success");
    setName(""); setEmail(""); setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-surface-border shadow-card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1.5">
            Full Name
          </label>
          <input
            id="cf-name" type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="John Doe" required
            className="w-full border border-surface-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1.5">
            Email Address
          </label>
          <input
            id="cf-email" type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="john@example.com" required
            className="w-full border border-surface-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1.5">
          Subject
        </label>
        <select
          id="cf-subject" value={subject} onChange={e => setSubject(e.target.value)}
          className="w-full border border-surface-border rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
        >
          {["Bug Report","Feature Request","New Calculator Suggestion","General Question","Business Inquiry","Other"].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1.5">
          Message
        </label>
        <textarea
          id="cf-message" value={message} onChange={e => setMessage(e.target.value)}
          rows={5} placeholder="Describe your question or feedback in detail..." required
          className="w-full border border-surface-border rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 font-medium">
          Please fill in all fields with a valid email address.
        </div>
      )}
      {status === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm text-emerald-700 font-medium">
          ✅ Message sent! We typically respond within 1–2 business days.
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 rounded-xl transition-colors text-base shadow-sm"
      >
        Send Message
      </button>
    </form>
  );
}
