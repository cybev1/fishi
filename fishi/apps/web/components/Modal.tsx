'use client';
import React from 'react';

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 card bg-white/90 backdrop-blur-xl max-w-lg w-full p-6">
        {children}
      </div>
    </div>
  );
}
