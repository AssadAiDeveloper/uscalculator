"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultRow, TwoCol } from "./CalculatorShell";

export default function PercentageCalculator() {
  const [x,setX]=useState("15"); const [y,setY]=useState("200");
  const [a,setA]=useState("30"); const [b,setB]=useState("200");
  const [from,setFrom]=useState("100"); const [to,setTo]=useState("150");
  const [r1,setR1]=useState<string|null>(null); const [r2,setR2]=useState<string|null>(null);
  const [r3,setR3]=useState<string|null>(null);

  const howItWorks1 = {
    title: "Percentage Formulas Explained",
    steps: [
      "<strong>X% of Y</strong>: Multiply Y by (X ÷ 100). Example: 15% of 200 = 200 × 0.15 = 30.",
      "<strong>X is what % of Y</strong>: Divide X by Y and multiply by 100. Example: 30 ÷ 200 × 100 = 15%.",
      "<strong>Percentage change</strong>: (New − Old) ÷ Old × 100. Positive = increase, negative = decrease.",
    ],
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <h3 className="text-sm font-semibold text-ink mb-3">What is <span className="text-brand-orange">{x}%</span> of {y}?</h3>
        <TwoCol><InputField label="Percentage" id="px" suffix="%" value={x} onChange={setX} /><InputField label="Of Value" id="py" value={y} onChange={setY} /></TwoCol>
        <button type="button" onClick={()=>setR1(`${x}% of ${y} = ${(parseFloat(x)/100*parseFloat(y)).toFixed(4)}`)}
          className="mt-4 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate</button>
        {r1 && <div className="mt-3 p-3 bg-surface-muted rounded-xl text-sm font-semibold text-ink">{r1}</div>}
      </div>
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <h3 className="text-sm font-semibold text-ink mb-3">{a} is what % of {b}?</h3>
        <TwoCol><InputField label="Value X" id="pa" value={a} onChange={setA} /><InputField label="Value Y" id="pb" value={b} onChange={setB} /></TwoCol>
        <button type="button" onClick={()=>setR2(`${a} is ${(parseFloat(a)/parseFloat(b)*100).toFixed(4)}% of ${b}`)}
          className="mt-4 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate</button>
        {r2 && <div className="mt-3 p-3 bg-surface-muted rounded-xl text-sm font-semibold text-ink">{r2}</div>}
      </div>
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <h3 className="text-sm font-semibold text-ink mb-3">Percentage Change</h3>
        <TwoCol><InputField label="From" id="pfr" value={from} onChange={setFrom} /><InputField label="To" id="pto" value={to} onChange={setTo} /></TwoCol>
        <button type="button" onClick={()=>{const ch=(parseFloat(to)-parseFloat(from))/parseFloat(from)*100;setR3(`Change: ${ch>=0?"+":""}${ch.toFixed(4)}%`);}}
          className="mt-4 w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate</button>
        {r3 && <div className="mt-3 p-3 bg-surface-muted rounded-xl text-sm font-semibold text-ink">{r3}</div>}
      </div>

      {/* How it works */}
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-5 sm:p-6">
        <h2 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
          <span className="text-brand-orange">📐</span>
          Percentage Formulas Explained
        </h2>
        <ol className="space-y-2.5">
          {howItWorks1.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: step }} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}