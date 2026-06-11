"use client";
import { useState } from "react";
import CalculatorShell, { InputField, TwoCol } from "./CalculatorShell";

export default function TriangleCalculator() {
  const [a,setA]=useState("3"); const [b,setB]=useState("4"); const [c,setC]=useState("5");
  const [result,setResult]=useState<string|null>(null);

  function calculate() {
    const sa=parseFloat(a)||0, sb=parseFloat(b)||0, sc=parseFloat(c)||0;
    if(sa&&sb&&sc){
      const s=(sa+sb+sc)/2, area=Math.sqrt(s*(s-sa)*(s-sb)*(s-sc));
      const A=Math.acos((sb*sb+sc*sc-sa*sa)/(2*sb*sc))*180/Math.PI;
      const B=Math.acos((sa*sa+sc*sc-sb*sb)/(2*sa*sc))*180/Math.PI;
      setResult(`Area: ${area.toFixed(4)} | Perimeter: ${(sa+sb+sc).toFixed(4)} | Angles: A=${A.toFixed(2)}° B=${B.toFixed(2)}° C=${(180-A-B).toFixed(2)}°`);
    }
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Solve Triangle"
      result={result && <p className="text-sm font-semibold text-ink text-center">{result}</p>}
    >
      <TwoCol>
        <InputField label="Side a" id="ta" value={a} onChange={setA} step="any" />
        <InputField label="Side b" id="tb" value={b} onChange={setB} step="any" />
        <InputField label="Side c" id="tc" value={c} onChange={setC} step="any" />
      </TwoCol>
    </CalculatorShell>
  );
}