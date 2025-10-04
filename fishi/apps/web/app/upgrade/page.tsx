'use client';
import FloatingCard from '@/components/FloatingCard';

export default function Upgrade() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FloatingCard>
        <h2 className="text-2xl font-semibold">Super Buyer</h2>
        <p className="mt-2 text-gray-600">Unlock contacts, priority support, better deal discovery.</p>
        <ul className="mt-4 text-sm list-disc list-inside text-gray-700">
          <li>View phone & WhatsApp on all listings</li>
          <li>Early access to verified batches</li>
          <li>Escrow fee discounts</li>
        </ul>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-bold">GHS 59</span><span className="text-gray-500">/ month</span>
        </div>
        <button className="mt-6 h-11 rounded-xl bg-black text-white w-full" onClick={() => alert('Stub: start Paystack/Flutterwave checkout')}>Upgrade</button>
      </FloatingCard>

      <FloatingCard>
        <h2 className="text-2xl font-semibold">Super Farmer</h2>
        <p className="mt-2 text-gray-600">Boost visibility, badge, and exposure to serious buyers.</p>
        <ul className="mt-4 text-sm list-disc list-inside text-gray-700">
          <li>Contact always visible on your listings</li>
          <li>Higher ranking in category & search</li>
          <li>Store analytics & insights</li>
        </ul>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-bold">GHS 79</span><span className="text-gray-500">/ month</span>
        </div>
        <button className="mt-6 h-11 rounded-xl bg-black text-white w-full" onClick={() => alert('Stub: start Paystack/Flutterwave checkout')}>Upgrade</button>
      </FloatingCard>
    </div>
  );
}
