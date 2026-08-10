import React from "react";

type PatternType = "hex-grid" | "rect-grid" | "diamond-grid" | "radial-cells" | "brand-lines" | "dot-grid";

interface GeometricPatternProps {
  type?: PatternType;
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}

export function GeometricPattern({
  type = "hex-grid",
  color = "rgba(255,215,0,0.08)",
  opacity = 1,
  size = 60,
  className = "",
}: GeometricPatternProps) {
  const patterns: Record<PatternType, React.ReactNode> = {
    "hex-grid": (
      <svg
        viewBox={`0 0 ${size} ${size * 1.15}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="hex-grid" patternUnits="userSpaceOnUse" width={size} height={size * 1.15}>
            <path
              d={`M${size/2} 0 L${size} ${size*0.575} L${size/2} ${size*1.15} L0 ${size*0.575} Z`}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
            />
            <circle cx={size/2} cy={size*0.575} r={size * 0.15} fill={color} opacity={opacity * 0.6} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>
    ),
    "rect-grid": (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="rect-grid" patternUnits="userSpaceOnUse" width={size} height={size}>
            <rect x="0" y="0" width={size * 0.45} height={size * 0.45} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <rect x={size * 0.5} y={size * 0.5} width={size * 0.45} height={size * 0.45} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size * 0.225} cy={size * 0.225} r={size * 0.08} fill={color} opacity={opacity * 0.6} />
            <circle cx={size * 0.725} cy={size * 0.725} r={size * 0.08} fill={color} opacity={opacity * 0.6} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rect-grid)" />
      </svg>
    ),
    "diamond-grid": (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="diamond-grid" patternUnits="userSpaceOnUse" width={size} height={size}>
            <path d={`M${size/2} 0 L${size} ${size/2} L${size/2} ${size} L0 ${size/2} Z`} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size/2} cy={size/2} r={size * 0.12} fill={color} opacity={opacity * 0.6} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond-grid)" />
      </svg>
    ),
    "radial-cells": (
      <svg
        viewBox={`0 0 ${size * 2} ${size * 2}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="radial-cells" patternUnits="userSpaceOnUse" width={size * 2} height={size * 2}>
            <circle cx={size * 0.5} cy={size * 0.5} r={size * 0.35} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size * 1.5} cy={size * 0.5} r={size * 0.35} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size * 0.5} cy={size * 1.5} r={size * 0.35} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size * 1.5} cy={size * 1.5} r={size * 0.35} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
            <circle cx={size} cy={size} r={size * 0.15} fill={color} opacity={opacity * 0.7} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#radial-cells)" />
      </svg>
    ),
    "brand-lines": (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="brand-lines" patternUnits="userSpaceOnUse" width={size} height={size}>
            <line x1="0" y1={size * 0.25} x2={size} y2={size * 0.25} stroke={color} strokeWidth="1" opacity={opacity * 0.5} />
            <line x1="0" y1={size * 0.75} x2={size} y2={size * 0.75} stroke={color} strokeWidth="1" opacity={opacity * 0.5} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#brand-lines)" />
      </svg>
    ),
    "dot-grid": (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} w-full h-full block`}
      >
        <defs>
          <pattern id="dot-grid" patternUnits="userSpaceOnUse" width={size} height={size}>
            <circle cx={size * 0.5} cy={size * 0.5} r={size * 0.08} fill={color} opacity={opacity * 0.7} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    ),
  };

  return patterns[type];
}
