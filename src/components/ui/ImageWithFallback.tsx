import React, { useState } from 'react';

import { travelImages } from '../../data/images';

export const ImageWithFallback = ({ src, alt, fallbackSrc = travelImages.categories.nature, className = '' }: { src: string, alt: string, fallbackSrc?: string, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={`object-cover w-full h-full ${className}`}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};
