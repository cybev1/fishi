async function getHealth() {
  const url = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL + '/health' : '';
  if (!url) return null;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    return res.ok ? res.json() : null;
  } catch { return null; }
}
import FloatingCard from '@/components/FloatingCard';
export default async function Home() {
  const health = await getHealth();
  return (
    <main className="grid gap-6">
      <FloatingCard>
        <h1 className="text-3xl font-semibold">Fishi.online</h1>
        <p className="mt-2 text-gray-700">Fish‑only marketplace & social commerce. Verified sellers, escrow, and VIP contact unlocks.</p>
        <div className="mt-4 text-sm text-gray-600">API health: {health ? '✅ ' + health.status : '❌ offline'}</div>
      </FloatingCard>
    </main>
  );
}
