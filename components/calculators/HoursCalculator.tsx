"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function HoursCalculator() {
  const [start,setStart]=useState("09:00"); const [end,setEnd]=useState("17:30");
  const [brk,setBrk]=useState("30"); const [result,setResult]=useState<any>(null);

  function calculate() {
    const [sh,sm]=(start||"0:0").split(":").map(Number);
    const [eh,em]=(end||"0:0").split(":").map(Number);
    let startMin=sh*60+sm, endMin=eh*60+em;
    if(endMin<startMin)endMin+=1440;
    const worked=(endMin-startMin-(parseInt(brk)||0))/60;
    setResult({ worked, breaks:parseInt(brk)||0 });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Hours"
      result={result && <>
        <ResultHeader label="Hours Worked" value={`${result.worked.toFixed(2)} hours`} />
        <ResultRow label="Break Time" value={`${result.breaks} minutes`} />
      </>}
    >
      <TwoCol>
        <InputField label="Start Time"     id="hcs" type="time" value={start} onChange={setStart} />
        <InputField label="End Time"       id="hce" type="time" value={end}   onChange={setEnd} />
        <InputField label="Break (minutes)" id="hcb" value={brk} onChange={setBrk} min="0" />
      </TwoCol>
    </CalculatorShell>
  );
}