"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow } from "./CalculatorShell";

export default function PregnancyCalculator() {
  const [lmp,setLmp]=useState(""); const [result,setResult]=useState<any>(null);

  function calculate() {
    if(!lmp) return;
    const lmpDate=new Date(lmp);
    const due=new Date(lmpDate); due.setDate(due.getDate()+280);
    const today=new Date();
    const daysPreg=Math.floor((today.getTime()-lmpDate.getTime())/86400000);
    const weeks=Math.floor(daysPreg/7), days=daysPreg%7;
    setResult({ due:due.toDateString(), weeks, days,
      trimester:weeks<13?"1st":weeks<27?"2nd":"3rd" });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate"
      result={result && <>
        <ResultHeader label="Due Date" value={result.due} />
        <ResultRow label="Current Week"  value={`Week ${result.weeks}, ${result.days} day(s)`} />
        <ResultRow label="Trimester"     value={result.trimester} accent />
      </>}
    >
      <InputField label="Last Menstrual Period (LMP)" id="preg" type="date" value={lmp} onChange={setLmp} />
    </CalculatorShell>
  );
}