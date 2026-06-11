"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function InterestCalculator() {
  const [principal,setP]=useState("5000"); const [rate,setR]=useState("5");
  const [years,setY]=useState("5"); const [type,setT]=useState("compound");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const P=parseFloat(principal)||0, r=parseFloat(rate)/100, t=parseFloat(years)||1;
    const total = type==="simple" ? P*(1+r*t) : P*Math.pow(1+r,t);
    setResult({ total, interest: total-P });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Interest"
      result={result && <>
        <ResultHeader label="Total Amount" value={`$${result.total.toFixed(2)}`} />
        <ResultRow label="Principal"        value={`$${parseFloat(principal).toFixed(2)}`} />
        <ResultRow label="Interest Earned"  value={`$${result.interest.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Principal ($)"     id="ip" prefix="$" value={principal} onChange={setP} />
        <InputField label="Annual Rate (%)"   id="ir" suffix="%" value={rate}      onChange={setR} step="0.01" />
        <InputField label="Duration (years)"  id="iy" value={years} onChange={setY} step="0.5" />
        <SelectField label="Type" id="it" value={type} onChange={setT}
          options={[["compound","Compound Interest"],["simple","Simple Interest"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}