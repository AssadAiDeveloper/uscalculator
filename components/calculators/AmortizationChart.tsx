"use client";

// Pure SVG chart — zero external dependencies, lazy-loaded on demand
interface Row { year: number; principal: number; interest: number; balance: number }

interface Props {
  data:        Row[];
  loanAmount:  number;
}

export default function AmortizationChart({ data, loanAmount }: Props) {
  const W = 600, H = 200, PAD = { top: 10, right: 10, bottom: 28, left: 56 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top  - PAD.bottom;

  const maxBalance = loanAmount;
  const years      = data.map(d => d.year);
  const n          = data.length;

  // Scale helpers
  const xOf   = (i: number) => PAD.left + (i / (n - 1)) * innerW;
  const yOf   = (v: number) => PAD.top  + innerH - (v / maxBalance) * innerH;

  // Build SVG polyline points for balance curve
  const balancePts = data.map((d, i) => `${xOf(i)},${yOf(d.balance)}`).join(" ");

  // Build stacked area paths: principal paid (cumulative) and interest paid (cumulative)
  let cumPrinc = 0, cumInt = 0;
  const princPts: string[] = [];
  const intPts:   string[] = [];
  data.forEach((d, i) => {
    cumPrinc += d.principal;
    cumInt   += d.interest;
    princPts.push(`${xOf(i)},${yOf(Math.min(cumPrinc, maxBalance))}`);
    intPts.push(`${xOf(i)},${yOf(Math.min(cumInt + cumPrinc, maxBalance + cumInt))}`);
  });

  // Y-axis tick labels
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => ({
    v: maxBalance * f,
    y: yOf(maxBalance * f),
  }));

  // X-axis tick labels — show ~5 evenly spaced years
  const step = Math.ceil(n / 5);
  const xTicks = data.filter((_, i) => i % step === 0 || i === n - 1);

  function fmt(v: number) {
    return v >= 1_000_000
      ? `$${(v / 1_000_000).toFixed(1)}M`
      : `$${(v / 1_000).toFixed(0)}k`;
  }

  return (
    <div>
      <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
        Remaining Balance Over Time
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Mortgage balance decreasing over the loan term"
      >
        {/* Grid lines */}
        {yTicks.map(t => (
          <g key={t.v}>
            <line
              x1={PAD.left} y1={t.y} x2={W - PAD.right} y2={t.y}
              stroke="#E2E8F0" strokeWidth="1"
            />
            <text
              x={PAD.left - 6} y={t.y + 4}
              textAnchor="end" fontSize="9" fill="#94A3B8"
            >
              {fmt(t.v)}
            </text>
          </g>
        ))}

        {/* Balance area fill */}
        <defs>
          <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1B3A6B" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1B3A6B" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon
          points={[
            `${xOf(0)},${yOf(0)}`,
            ...data.map((d, i) => `${xOf(i)},${yOf(d.balance)}`),
            `${xOf(n - 1)},${yOf(0)}`,
          ].join(" ")}
          fill="url(#balGrad)"
        />

        {/* Balance line */}
        <polyline
          points={balancePts}
          fill="none"
          stroke="#1B3A6B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* X-axis labels */}
        {xTicks.map((d, i) => (
          <text
            key={i}
            x={xOf(data.indexOf(d))}
            y={H - 6}
            textAnchor="middle"
            fontSize="9"
            fill="#94A3B8"
          >
            Yr {d.year}
          </text>
        ))}

        {/* Midpoint annotation */}
        {n > 1 && (() => {
          const mid  = Math.floor(n / 2);
          const midX = xOf(mid);
          const midY = yOf(data[mid].balance);
          return (
            <g>
              <circle cx={midX} cy={midY} r="3" fill="#F97316" />
              <text x={midX + 6} y={midY - 4} fontSize="9" fill="#F97316" fontWeight="600">
                {fmt(data[mid].balance)}
              </text>
            </g>
          );
        })()}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-1 justify-center text-xs text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-0.5 bg-brand-blue rounded" />
          Remaining balance
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-orange" />
          Midpoint
        </span>
      </div>
    </div>
  );
}
