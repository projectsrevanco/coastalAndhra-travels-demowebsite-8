import React from 'react';

export const SectionHeading = ({ title, subtitle, className = '' }: { title: string, subtitle?: string, className?: string }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {subtitle && <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-serif text-primary">{title}</h2>
    </div>
  );
};
