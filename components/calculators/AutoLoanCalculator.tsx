"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function AutoLoanCalculator() {
  const [price,  setPrice]  = useState("35000");
  const [down,   setDown]   = useState("5000");
  const [trade,  setTrade]  = useState("0");
  const [tax,    setTax]    = useState("8");
  const [term,   setTerm]   = useState("60");
  const [rate,   setRate]   = useState("7.5");
  const [result, setResult] = useState<any>(null);

  function calculate() {
    const taxAmt = (parseFloat(price)-parseFloat(down)-parseFloat(trade)) * parseFloat(tax)/100;
    const P = parseFloat(price)-parseFloat(down)-parseFloat(trade)+taxAmt;
    const r = parseFloat(rate)/100/12;
    const n = parseInt(term);
    const pmt = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    setResult({ pmt, total: pmt*n, interest: pmt*n-P, principal: P });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Car Payment"
      result={result && <>
        <ResultHeader label="Monthly Payment" value={`$${result.pmt.toFixed(2)}`} />
        <ResultRow label="Loan Amount"    value={`$${result.principal.toFixed(2)}`} />
        <ResultRow label="Total Cost"     value={`$${result.total.toFixed(2)}`} />
        <ResultRow label="Total Interest" value={`$${result.interest.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Vehicle Price"  id="ap" prefix="$" value={price} onChange={setPrice} />
        <InputField label="Down Payment"   id="ad" prefix="$" value={down}  onChange={setDown} />
        <InputField label="Trade-in Value" id="at" prefix="$" value={trade} onChange={setTrade} />
        <InputField label="Sales Tax"      id="ax" suffix="%" value={tax}   onChange={setTax} step="0.1" />
        <SelectField label="Loan Term" id="aterm" value={term} onChange={setTerm}
          options={[["24","24 months"],["36","36 months"],["48","48 months"],["60","60 months"],["72","72 months"],["84","84 months"]]} />
        <InputField label="Interest Rate"  id="ar" suffix="%" value={rate}  onChange={setRate} step="0.01" />
      </TwoCol>
    </CalculatorShell>
  );
}