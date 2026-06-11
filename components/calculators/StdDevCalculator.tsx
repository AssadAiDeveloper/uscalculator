"use client";
import { useState } from "react";
import CalculatorShell, { SelectField, ResultHeader, ResultRow } from "./CalculatorShell";

export default function StdDevCalculator() {
  const [nums,setNums]=useState("2,4,4,4,5,5,7,9"); const [type,setType]=useState("pop");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const arr=nums.split(/[\s,]+/).map(Number).filter(n=>!isNaN(n));
    if(arr.length<2){alert("Enter at least 2 numbers.");return;}
    const mean=arr.reduce((a,b)=>a+b,0)/arr.length;
    const variance=arr.reduce((s,n)=>s+(n-mean)**2,0)/(type==="pop"?arr.length:arr.length-1);
    setResult({ sd:Math.sqrt(variance), mean, variance, count:arr.length, min:Math.min(...arr), max:Math.max(...arr) });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate"
      result={result && <>
        <ResultHeader label="Standard Deviation" value={result.sd.toFixed(4)} />
        <ResultRow label="Count"    value={`${result.count}`} />
        <ResultRow label="Mean"     value={result.mean.toFixed(4)} />
        <ResultRow label="Variance" value={result.variance.toFixed(4)} />
        <ResultRow label="Min"      value={`${result.min}`} />
        <ResultRow label="Max"      value={`${result.max}`} accent />
      </>}
    >
      <div>
        <label className="block text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1.5">Numbers (comma-separated)</label>
        <textarea value={nums} onChange={e=>setNums(e.target.value)} rows={3}
          className="w-full border border-surface-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange" />
      </div>
      <SelectField label="Population or Sample" id="sdt" value={type} onChange={setType}
        options={[["pop","Population (σ)"],["samp","Sample (s)"]]} />
    </CalculatorShell>
  );
}