import React from 'react';

export const Badge = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={`inline-block bg-surface text-secondary text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
};
