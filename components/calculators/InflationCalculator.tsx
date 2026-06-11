"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function InflationCalculator() {
  const [amount,setA]=useState("1000"); const [rate,setR]=useState("3");
  const [start,setSt]=useState("2000"); const [end,setEn]=useState("2024");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const a=parseFloat(amount)||0, r=parseFloat(rate)/100;
    const years=parseInt(end)-parseInt(start);
    if(years<=0) return;
    const adjusted=a*Math.pow(1+r,years);
    setResult({ adjusted, original:a, years, pct:(adjusted-a)/a*100 });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Inflation Erodes Purchasing Power",
        formulaLabel: "Compound Inflation Formula",
        formula: "Adjusted Amount = Original × (1 + rate)^years",
        steps: [
          "Inflation compounds annually — each year's prices are based on the prior year's prices, not the original.",
          "A 3% annual rate means prices double in roughly <strong>24 years</strong> (use the Rule of 72: 72 ÷ 3 = 24).",
          "The calculator shows what your original amount would need to be in the future to buy the same goods.",
          "Purchasing power lost = (adjusted − original) ÷ adjusted × 100%.",
        ],
        note: "The US Federal Reserve targets 2% annual inflation. Historical US average inflation is approximately 3.1% (1913–2024).",
      }} buttonLabel="Calculate Inflation"
      result={result && <>
        <ResultHeader label={`Value in ${end}`} value={`$${result.adjusted.toFixed(2)}`}
          sub={`$${result.original} in ${start} = $${result.adjusted.toFixed(2)} today`} />
        <ResultRow label="Original Amount"    value={`$${result.original.toFixed(2)}`} />
        <ResultRow label="Purchasing Power Lost" value={`${result.pct.toFixed(1)}%`} accent />
        <ResultRow label="Years"              value={`${result.years}`} />
      </>}
    >
      <TwoCol>
        <InputField label="Initial Amount ($)"  id="ina" prefix="$" value={amount} onChange={setA} />
        <InputField label="Inflation Rate (%)"  id="inr" suffix="%" value={rate}   onChange={setR} step="0.1" />
        <InputField label="Start Year"          id="ins" value={start} onChange={setSt} />
        <InputField label="End Year"            id="ine" value={end}   onChange={setEn} />
      </TwoCol>
    </CalculatorShell>
  );
}