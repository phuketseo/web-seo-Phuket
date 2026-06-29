/** SVG gradient defs for stroke/fill — reference id="brand-gradient" */
export function BrandGradientDefs() {
  return (
    <svg aria-hidden className="absolute w-0 h-0 overflow-hidden pointer-events-none">
      <defs>
        <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}
