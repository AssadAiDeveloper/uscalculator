"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function PaymentCalculator() {
  const [amount,setA]=useState("15000"); const [rate,setR]=useState("6");
  const [term,setT]=useState("36"); const [freq,setF]=useState("12");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const P=parseFloat(amount)||0, fr=parseInt(freq), r=parseFloat(rate)/100/fr;
    const n=(parseInt(term)||1)*(fr/12);
    const pmt = r===0?P/n:P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const labels:any={"12":"Monthly","26":"Bi-Weekly","52":"Weekly"};
    setResult({ pmt, total:pmt*n, interest:pmt*n-P, label:labels[freq] });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Payment"
      result={result && <>
        <ResultHeader label={`${result.label} Payment`} value={`$${result.pmt.toFixed(2)}`} />
        <ResultRow label="Total Amount Paid" value={`$${result.total.toFixed(2)}`} />
        <ResultRow label="Total Interest"    value={`$${result.interest.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Loan Amount ($)"   id="pya" prefix="$" value={amount} onChange={setA} />
        <InputField label="Annual Rate (%)"   id="pyr" suffix="%" value={rate}   onChange={setR} step="0.01" />
        <InputField label="Term (months)"     id="pyt" value={term}  onChange={setT} />
        <SelectField label="Payment Frequency" id="pyf" value={freq} onChange={setF}
          options={[["12","Monthly"],["26","Bi-Weekly"],["52","Weekly"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}