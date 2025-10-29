type Props = {
  size?: number;
  wordmarkLeft?: string;
  wordmarkRight?: string;
  showDot?: boolean;
};

const Logo = ({ size = 120, wordmarkLeft = "H", wordmarkRight = "AI", showDot = true }: Props) => {
  const r = size / 2;
  const fs = size * 0.28; // font size
  const offset = fs * 0.9; // approximate spacing between H and AI
  return (
    <div className="inline-block" aria-label="humind.ia logo">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-hidden>
        <defs>
          <radialGradient id="g-globe" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="hsl(220 30% 18%)" />
            <stop offset="70%" stopColor="hsl(220 30% 12%)" />
            <stop offset="100%" stopColor="hsl(220 30% 10%)" />
          </radialGradient>
          <linearGradient id="g-letter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e6e9ef" />
          </linearGradient>
          <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Globe */}
        <circle cx={r} cy={r} r={r - 2} fill="url(#g-globe)" />

        {/* Stylized continents */}
        <g opacity="0.15" fill="hsl(220 15% 35%)">
          <path d={`M ${r - r * 0.45},${r - r * 0.1} c 10,-15 25,-18 40,-10 8,4 10,10 5,18 -8,12 -22,10 -35,8 z`} />
          <path d={`M ${r + r * 0.05},${r + r * 0.25} c 12,2 18,8 16,16 -3,10 -20,14 -32,10 -8,-3 -7,-12 1,-16 4,-2 9,-3 15,-10 z`} />
        </g>

        {/* Orbit behind */}
        <g opacity="0.5">
          <ellipse cx={r} cy={r} rx={r * 0.9} ry={r * 0.55} stroke="hsl(var(--primary) / 0.45)" strokeWidth={2} fill="none" style={{ filter: "url(#f-glow)" }} />
        </g>

        {/* Wordmark H • AI */}
        <g>
          <text x={r - offset} y={r + fs * 0.04} textAnchor="middle" fontFamily="'Space Grotesk', system-ui, sans-serif" fontWeight={900} fontSize={fs} fill="url(#g-letter)" style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.42)", strokeWidth: 2 }}>
            {wordmarkLeft}
          </text>
          {showDot && <circle cx={r} cy={r} r={size * 0.035} fill="hsl(var(--primary))" />}
          <text x={r + offset * 0.52} y={r + fs * 0.04} textAnchor="middle" fontFamily="'Space Grotesk', system-ui, sans-serif" fontWeight={900} fontSize={fs} fill="url(#g-letter)" style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.42)", strokeWidth: 2 }}>
            {wordmarkRight}
          </text>
        </g>

        {/* Orbit in front with animated dash */}
        <g>
          <ellipse cx={r} cy={r} rx={r * 0.9} ry={r * 0.55} stroke="hsl(var(--primary))" strokeWidth={2} fill="none" strokeDasharray="8 10" className="animate-orbit-dash" style={{ filter: "url(#f-glow)" }} />
        </g>
      </svg>
    </div>
  );
};

export default Logo;

