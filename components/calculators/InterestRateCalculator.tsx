"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function InterestRateCalculator() {
  const [principal,setP]=useState("20000"); const [payment,setPmt]=useState("450");
  const [term,setT]=useState("60"); const [result,setResult]=useState<any>(null);

  function calculate() {
    const P=parseFloat(principal)||0, pmt=parseFloat(payment)||0, n=parseInt(term)||1;
    let lo=0,hi=1,r=0.01;
    for(let i=0;i<200;i++){r=(lo+hi)/2;const c=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);if(c>pmt)hi=r;else lo=r;}
    setResult({ apr:r*12*100, total:pmt*n, interest:pmt*n-P });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Find Interest Rate"
      result={result && <>
        <ResultHeader label="Annual Interest Rate" value={`${result.apr.toFixed(4)}%`} />
        <ResultRow label="Total Paid"     value={`$${result.total.toFixed(2)}`} />
        <ResultRow label="Total Interest" value={`$${result.interest.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Loan Amount ($)"      id="ira" prefix="$" value={principal} onChange={setP} />
        <InputField label="Monthly Payment ($)"  id="irp" prefix="$" value={payment}   onChange={setPmt} />
        <InputField label="Term (months)"        id="irt" value={term} onChange={setT} />
      </TwoCol>
    </CalculatorShell>
  );
}