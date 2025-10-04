import React from 'react';
import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'Fishi.online', description: 'Fish-only marketplace' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen gradient-stripe">
        <nav className="sticky top-0 z-40 border-b border-white/30 bg-white/60 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">Fishi.online</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/listings">Listings</Link>
              <Link href="/upgrade">Upgrade</Link>
            </div>
          </div>
        </nav>
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </body>
    </html>
  );
}
