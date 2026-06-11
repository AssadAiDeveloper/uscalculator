"use client";
import { useState } from "react";
import { ResultHeader, ResultRow } from "./CalculatorShell";

interface Assignment { name:string; score:string; max:string; weight:string; }

export default function GradeCalculator() {
  const [rows,setRows]=useState<Assignment[]>([{name:"",score:"85",max:"100",weight:"25"},{name:"",score:"90",max:"100",weight:"25"}]);
  const [result,setResult]=useState<any>(null);

  function add(){setRows(r=>[...r,{name:"",score:"80",max:"100",weight:"25"}]);}
  function upd(i:number,k:keyof Assignment,v:string){setRows(r=>r.map((x,idx)=>idx===i?{...x,[k]:v}:x));}

  const howItWorks = {
    title: "How Weighted Grades Are Calculated",
    formulaLabel: "Weighted Average Formula",
    formula: "Final Grade = Σ (score/max × weight) ÷ Σ weight × 100",
    steps: [
      "For each assignment: divide your score by the maximum possible score to get a percentage.",
      "Multiply that percentage by the assignment\'s weight (importance).",
      "Sum all weighted scores, then divide by the sum of all weights.",
      "If weights don\'t add up to 100, the calculator normalizes them automatically.",
    ],
  };

  function calculate(){
    let ws=0,tw=0;
    rows.forEach(r=>{const s=parseFloat(r.score)||0,mx=parseFloat(r.max)||100,w=parseFloat(r.weight)||0;ws+=s/mx*w;tw+=w;});
    if(!tw)return;
    const pct=ws/tw*100;
    const letter=pct>=90?"A":pct>=80?"B":pct>=70?"C":pct>=60?"D":"F";
    setResult({pct,letter});
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <div className="flex text-2xs text-ink-muted uppercase tracking-wide font-semibold gap-2 mb-2">
          <span className="flex-1">Assignment</span><span className="w-14 text-center">Score</span><span className="w-14 text-center">Max</span><span className="w-14 text-center">Weight%</span><span className="w-6"/>
        </div>
        <div className="space-y-2 mb-4">
          {rows.map((r,i)=>(
            <div key={i} className="flex gap-2 items-center">
              <input placeholder="Name" value={r.name} onChange={e=>upd(i,"name",e.target.value)}
                className="flex-1 border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
              {(["score","max","weight"] as const).map(k=>(
                <input key={k} type="number" value={r[k]} onChange={e=>upd(i,k,e.target.value)}
                  className="w-14 border border-surface-border rounded-lg px-2 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
              ))}
              {rows.length>1&&<button type="button" onClick={()=>setRows(r=>r.filter((_,idx)=>idx!==i))} className="text-red-400 font-bold px-1">×</button>}
            </div>
          ))}
        </div>
        <button type="button" onClick={add} className="text-brand-blue text-sm font-semibold hover:underline mb-4 block">+ Add Assignment</button>
        <button type="button" onClick={calculate}
          className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate Grade</button>
      </div>
      {result&&<div className="result-animate bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <ResultHeader label="Final Grade" value={`${result.pct.toFixed(2)}%`} sub={`Letter Grade: ${result.letter}`} />
      </div>}

      {/* How it works */}
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-5 sm:p-6">
        <h2 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
          <span className="text-brand-orange">📐</span>
          {howItWorks.title}
        </h2>
        {howItWorks.formulaLabel && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">{howItWorks.formulaLabel}</p>
            <div className="bg-surface-muted border border-surface-border rounded-xl px-4 py-3 font-mono text-sm text-brand-blue overflow-x-auto">
              {howItWorks.formula}
            </div>
          </div>
        )}
        <ol className="space-y-2.5">
          {howItWorks.steps.map((step, i) => (
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