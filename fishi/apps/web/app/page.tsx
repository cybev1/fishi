import FloatingCard from '@/components/FloatingCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid gap-6">
      <FloatingCard>
        <h1 className="text-3xl font-semibold">Fishi.online</h1>
        <p className="mt-2 text-gray-700">Fish‑only marketplace & social commerce. Verified sellers, escrow, and VIP contact unlocks.</p>
        <div className="mt-5 flex gap-3">
          <Link href="/listings" className="h-11 px-4 rounded-xl bg-black text-white flex items-center">Browse Listings</Link>
          <Link href="/upgrade" className="h-11 px-4 rounded-xl border flex items-center">Upgrade</Link>
        </div>
      </FloatingCard>
    </main>
  );
}
