"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function DateCalculator() {
  const today=new Date().toISOString().split("T")[0];
  const [start,setStart]=useState("2025-01-01"); const [end,setEnd]=useState(today);
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const s=new Date(start), e=new Date(end);
    const diff=Math.abs(e.getTime()-s.getTime());
    const days=Math.floor(diff/86400000);
    setResult({ days, weeks:Math.floor(days/7), months:Math.floor(days/30) });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Difference"
      result={result && <>
        <ResultHeader label="Days Between Dates" value={`${result.days.toLocaleString()} days`} />
        <ResultRow label="Weeks"  value={`${result.weeks.toLocaleString()} weeks, ${result.days%7} days`} />
        <ResultRow label="Months" value={`~${result.months} months`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Start Date" id="ds" type="date" value={start} onChange={setStart} />
        <InputField label="End Date"   id="de" type="date" value={end}   onChange={setEnd} />
      </TwoCol>
    </CalculatorShell>
  );
}