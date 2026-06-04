import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Contract Diff Monitor — Catch Breaking Changes Before They Break Clients",
  description: "Monitor OpenAPI specifications for breaking changes. Get instant alerts via webhooks or email when an API update could break your integrations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11a3a2a6-ba4b-4bb3-a0b4-c1ce5635356b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
