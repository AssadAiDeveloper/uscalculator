"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function DueDateCalculator() {
  const [lmp,setLmp]=useState(""); const [cycle,setCycle]=useState("28");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    if(!lmp) return;
    const lmpDate=new Date(lmp), c=parseInt(cycle)||28;
    const due=new Date(lmpDate); due.setDate(due.getDate()+280+(c-28));
    const t1=new Date(lmpDate); t1.setDate(t1.getDate()+91);
    const t2=new Date(lmpDate); t2.setDate(t2.getDate()+182);
    setResult({ due:due.toDateString(), t1:t1.toDateString(), t2:t2.toDateString() });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Due Date"
      result={result && <>
        <ResultHeader label="Estimated Due Date" value={result.due} />
        <ResultRow label="End of 1st Trimester" value={result.t1} />
        <ResultRow label="End of 2nd Trimester" value={result.t2} />
        <ResultRow label="Due Date"             value={result.due} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Last Menstrual Period" id="dd" type="date" value={lmp}   onChange={setLmp} />
        <InputField label="Cycle Length (days)"   id="dc" value={cycle} onChange={setCycle} min="20" max="45" />
      </TwoCol>
    </CalculatorShell>
  );
}