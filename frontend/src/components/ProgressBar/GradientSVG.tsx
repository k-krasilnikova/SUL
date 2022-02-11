import React from 'react';

interface IGradient {
  startColor?: string;
  endColor?: string;
  rotation?: number;
  idCSS?: string;
}

export const GradientSVG: React.FC<IGradient> = ({ startColor, endColor, idCSS, rotation }) => {
  const gradientTransform = `rotate(${rotation})`;

  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
