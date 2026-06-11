"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function IdealWeightCalculator() {
  const [gender,setG]=useState("male"); const [height,setH]=useState("175");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const h=parseFloat(height)||0, hm=h/100;
    const minW=18.5*hm*hm, maxW=24.9*hm*hm;
    const hIn=h/2.54, over5=Math.max(0,hIn-60);
    const devine=gender==="male"?50+2.3*over5:45.5+2.3*over5;
    setResult({ minW, maxW, devine });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Ideal Weight"
      result={result && <>
        <ResultHeader label="Ideal Weight Range" value={`${result.minW.toFixed(1)} – ${result.maxW.toFixed(1)} kg`} />
        <ResultRow label="BMI Range"      value="18.5 – 24.9" />
        <ResultRow label="Devine Formula" value={`${result.devine.toFixed(1)} kg`} accent />
      </>}
    >
      <TwoCol>
        <SelectField label="Gender" id="iwg" value={gender} onChange={setG}
          options={[["male","Male"],["female","Female"]]} />
        <InputField label="Height (cm)" id="iwh" value={height} onChange={setH} />
      </TwoCol>
    </CalculatorShell>
  );
}