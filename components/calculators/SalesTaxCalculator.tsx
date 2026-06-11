"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function SalesTaxCalculator() {
  const [price,setP]=useState("100"); const [rate,setR]=useState("8.5");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const p=parseFloat(price)||0, r=parseFloat(rate)||0;
    const taxAmt=p*r/100;
    setResult({ taxAmt, total:p+taxAmt, rate:r, price:p });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Tax"
      result={result && <>
        <ResultHeader label="Total Price" value={`$${result.total.toFixed(2)}`} />
        <ResultRow label="Before Tax"    value={`$${result.price.toFixed(2)}`} />
        <ResultRow label={`Tax (${result.rate}%)`} value={`$${result.taxAmt.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Before-Tax Price ($)" id="stp" prefix="$" value={price} onChange={setP} />
        <InputField label="Tax Rate (%)"         id="str" suffix="%" value={rate}  onChange={setR} step="0.01" />
      </TwoCol>
    </CalculatorShell>
  );
}