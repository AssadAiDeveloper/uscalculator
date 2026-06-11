"use client";
import { useState } from "react";
import { ResultHeader, ResultRow } from "./CalculatorShell";

interface Course { name:string; credits:string; grade:string; }
const GRADES:[string,string][]=[["4.0","A (4.0)"],["3.7","A- (3.7)"],["3.3","B+ (3.3)"],["3.0","B (3.0)"],["2.7","B- (2.7)"],["2.3","C+ (2.3)"],["2.0","C (2.0)"],["1.7","C- (1.7)"],["1.0","D (1.0)"],["0","F (0.0)"]];

export default function GPACalculator() {
  const [courses,setCourses]=useState<Course[]>([{name:"",credits:"3",grade:"4.0"},{name:"",credits:"3",grade:"3.0"}]);
  const [result,setResult]=useState<any>(null);

  function addCourse(){setCourses(c=>[...c,{name:"",credits:"3",grade:"4.0"}]);}
  function removeCourse(i:number){setCourses(c=>c.filter((_,idx)=>idx!==i));}
  function update(i:number,key:keyof Course,v:string){setCourses(c=>c.map((r,idx)=>idx===i?{...r,[key]:v}:r));}

  const howItWorks = {
    title: "How GPA Is Calculated",
    formulaLabel: "Credit-Weighted GPA Formula",
    formula: "GPA = Σ (grade points × credits) ÷ Σ credits",
    steps: [
      "Convert each letter grade to grade points: A=4.0, A-=3.7, B+=3.3, B=3.0 … F=0.0.",
      "Multiply each course\'s grade points by its credit hours.",
      "Sum all the products, then divide by total credit hours.",
      "Courses with more credits have a greater impact on your GPA than 1-credit courses.",
    ],
  };

  function calculate(){
    let pts=0, creds=0;
    courses.forEach(c=>{const cr=parseFloat(c.credits)||0,g=parseFloat(c.grade)||0;pts+=cr*g;creds+=cr;});
    if(!creds)return;
    setResult({ gpa:pts/creds, credits:creds });
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <div className="space-y-2 mb-4">
          {courses.map((c,i)=>(
            <div key={i} className="flex gap-2 items-center">
              <input placeholder="Course name" value={c.name} onChange={e=>update(i,"name",e.target.value)}
                className="flex-1 border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
              <input type="number" placeholder="Credits" value={c.credits} onChange={e=>update(i,"credits",e.target.value)}
                className="w-16 border border-surface-border rounded-lg px-2 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-brand-orange/30" />
              <select value={c.grade} onChange={e=>update(i,"grade",e.target.value)}
                className="border border-surface-border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30">
                {GRADES.map(([v,l])=><option key={v} value={v}>{l}</option>)}
              </select>
              {courses.length>1&&<button type="button" onClick={()=>removeCourse(i)} className="text-red-400 hover:text-red-600 font-bold px-1">×</button>}
            </div>
          ))}
        </div>
        <button type="button" onClick={addCourse} className="text-brand-blue text-sm font-semibold hover:underline mb-4 block">+ Add Course</button>
        <button type="button" onClick={calculate}
          className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate GPA</button>
      </div>
      {result&&<div className="result-animate bg-white rounded-2xl border border-surface-border shadow-card p-6">
        <ResultHeader label="Your GPA" value={result.gpa.toFixed(2)} />
        <ResultRow label="Total Credits" value={`${result.credits}`} />
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