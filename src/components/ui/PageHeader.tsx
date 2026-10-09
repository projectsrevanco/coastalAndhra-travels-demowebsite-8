import React from 'react';

import { ImageWithFallback } from './ImageWithFallback';

export const PageHeader = ({ title, description, bgImage }: { title: string, description?: string, bgImage?: string }) => {
  return (
    <div className="relative py-24 md:py-32 bg-primary flex items-center justify-center text-center">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={bgImage} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
      )}
      <div className="relative z-10 max-w-3xl px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{title}</h1>
        {description && <p className="text-lg text-white/80">{description}</p>}
      </div>
    </div>
  );
};
