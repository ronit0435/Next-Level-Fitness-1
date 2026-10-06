import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showTextBeside?: boolean;
  inverted?: boolean;
}

export const NextLevelLogo: React.FC<LogoProps> = ({
  className = '',
  size = 56,
  showTextBeside = true,
  inverted = false,
}) => {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Visual Identity Logo Emblem */}
      <div 
        className="relative shrink-0 rounded-full bg-white shadow-xs overflow-hidden flex items-center justify-center border-2 border-[#D91B24]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Circular Background */}
          <circle cx="100" cy="100" r="98" fill="#FFFFFF" />

          {/* Circular Red Outline Ring */}
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#D91B24"
            strokeWidth="7"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="#D91B24"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />

          {/* Barbell Across Center */}
          <g id="barbell">
            {/* Center Bar */}
            <rect x="25" y="97" width="150" height="6" rx="2" fill="#171717" />
            {/* Knurling accents */}
            <rect x="65" y="96" width="12" height="8" fill="#D91B24" rx="1" />
            <rect x="123" y="96" width="12" height="8" fill="#D91B24" rx="1" />
            {/* Left Weight Plates */}
            <rect x="30" y="80" width="7" height="40" rx="2" fill="#171717" />
            <rect x="39" y="85" width="6" height="30" rx="1.5" fill="#262626" />
            <rect x="47" y="90" width="5" height="20" rx="1" fill="#404040" />
            {/* Right Weight Plates */}
            <rect x="163" y="80" width="7" height="40" rx="2" fill="#171717" />
            <rect x="155" y="85" width="6" height="30" rx="1.5" fill="#262626" />
            <rect x="148" y="90" width="5" height="20" rx="1" fill="#404040" />
          </g>

          {/* Muscular Athlete / Bodybuilder Silhouette */}
          <g id="bodybuilder" fill="#171717">
            {/* Head and Traps */}
            <circle cx="100" cy="54" r="11" />
            {/* Neck & Traps */}
            <path d="M88 64 C92 58 108 58 112 64 L118 72 C112 70 88 70 82 72 Z" />
            {/* Deltoids & Upper Torso */}
            <path d="M72 74 C62 76 60 90 68 97 C76 102 85 96 90 92 L100 95 L110 92 C115 96 124 102 132 97 C140 90 138 76 128 74 C120 72 110 74 100 73 C90 74 80 72 72 74 Z" />
            {/* Massive Biceps & Forearms in Posing Flex */}
            <path d="M64 78 C52 75 48 88 54 98 C60 106 68 104 74 96 Z" />
            <path d="M136 78 C148 75 152 88 146 98 C140 106 132 104 126 96 Z" />
            {/* Powerful Pectorals & Abs */}
            <path d="M84 94 C88 108 98 112 100 114 C102 112 112 108 116 94 C108 92 92 92 84 94 Z" />
            {/* Tapered Waist & Obliques */}
            <path d="M87 114 C90 125 96 128 100 128 C104 128 110 125 113 114 Z" />
          </g>

          {/* Brand Arc / Next Level Text */}
          <path
            id="textPathUpper"
            d="M 32 60 A 74 74 0 0 1 168 60"
            fill="none"
          />
          <text
            fill="#D91B24"
            fontFamily="'Oswald', Impact, sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="2.5"
            textAnchor="middle"
          >
            <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
              NEXT LEVEL
            </textPath>
          </text>

          {/* Lower Arc / FITNESS Text */}
          <path
            id="textPathLower"
            d="M 36 150 A 74 74 0 0 0 164 150"
            fill="none"
          />
          <text
            fill="#171717"
            fontFamily="'Oswald', Impact, sans-serif"
            fontSize="19"
            fontWeight="700"
            letterSpacing="4"
            textAnchor="middle"
          >
            <textPath href="#textPathLower" startOffset="50%" textAnchor="middle">
              FITNESS
            </textPath>
          </text>

          {/* Small Star Accents */}
          <circle cx="34" cy="100" r="2.5" fill="#D91B24" />
          <circle cx="166" cy="100" r="2.5" fill="#D91B24" />
        </svg>
      </div>

      {/* Brand Text Beside Emblem */}
      {showTextBeside && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className="font-heading text-xl md:text-2xl font-bold tracking-tight text-[#D91B24]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              NEXT LEVEL
            </span>
            <span
              className={`font-heading text-xl md:text-2xl font-bold tracking-tight ${
                inverted ? 'text-white' : 'text-neutral-900'
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              FITNESS
            </span>
          </div>
          <span className={`text-[10px] tracking-widest uppercase font-semibold mt-0.5 ${
            inverted ? 'text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'
          }`}>
            STRENGTH & PERFORMANCE
          </span>
        </div>
      )}
    </div>
  );
};
