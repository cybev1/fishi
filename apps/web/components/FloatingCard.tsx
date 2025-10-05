import React from 'react';
export default function FloatingCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card-glass p-6 ${className}`}>{children}</div>;
}
