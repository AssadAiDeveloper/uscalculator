"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "cookie-consent";
const GA_ID = "G-4EJFT7L4VC";
const SERVER = "server" as const;

type Choice = "granted" | "denied";
type Snapshot = Choice | null | typeof SERVER;

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Snapshot {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function getServerSnapshot(): Snapshot {
  return SERVER;
}

export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const choose = (value: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (err) {
      void err;
    }
    listeners.forEach((listener) => listener());
  };

  const showBanner = stored === null;

  return (
    <>
      {stored === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted'
            });
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 600,
              background: "#fff",
              border: "1.5px solid #E2E8F0",
              borderRadius: 16,
              boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#1E293B", margin: 0 }}>
              We use cookies to analyze traffic and improve your experience. You can accept or
              decline analytics cookies. See our{" "}
              <Link href="/privacy-policy" style={{ color: "#2553A0", fontWeight: 600 }}>
                Privacy Policy
              </Link>
              .
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => choose("granted")}
                style={{
                  background: "#F97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => choose("denied")}
                style={{
                  background: "#fff",
                  color: "#1B3A6B",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 10,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
