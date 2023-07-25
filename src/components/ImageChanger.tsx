import React, { useState } from 'react';

interface ImageProps {
  src: string;
  hoverSrc: string;
  alt: string;
}

const ImageChanger: React.FC<ImageProps> = ({ src, hoverSrc, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <img
        className={`${isHovered ? 'hidden' : ''} animate-spin-slow w-44 `}
        src={src}
        alt={alt}
        onMouseEnter={() => setIsHovered(true)}
      />
      <img
        className={`${isHovered ? '' : 'hidden'} w-44 h-28 hover:scale-105`}
        src={hoverSrc}
        alt={alt}
        onMouseLeave={() => setIsHovered(false)}
      />
    </>
  );
};

export default ImageChanger;
