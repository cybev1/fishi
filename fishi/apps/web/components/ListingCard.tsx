'use client';
import React from 'react';
import Modal from './Modal';

type Props = {
  title: string;
  species: string;
  price: string;
  location: string;
  seller: string;
};

export default function ListingCard({ title, species, price, location, seller }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{species} • {location}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{price}</div>
          <div className="text-xs text-gray-500">per crate</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm">
          Seller: <span className="font-medium">{seller}</span><br/>
          Contact: <span className="font-mono">••• ••• •••</span>
        </div>
        <button className="px-3 py-2 rounded-lg bg-black text-white" onClick={() => setOpen(true)}>Show Contact</button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="text-xl font-semibold">Unlock seller contact</h3>
        <p className="mt-2 text-sm text-gray-600">
          Upgrade to <b>Super Buyer</b> to view phone & WhatsApp across all listings.
        </p>
        <div className="mt-5 grid gap-3">
          <button className="h-11 rounded-xl bg-black text-white">Upgrade (Monthly)</button>
          <button className="h-11 rounded-xl bg-white border">Maybe later</button>
        </div>
        <p className="mt-3 text-xs text-gray-500">You can also unlock contacts with a one-time micro‑token (coming soon).</p>
      </Modal>
    </div>
  );
}
