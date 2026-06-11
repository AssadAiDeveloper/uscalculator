"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function BodyFatCalculator() {
  const [gender,setG]=useState("male"); const [height,setH]=useState("175");
  const [neck,setN]=useState("37"); const [waist,setW]=useState("85");
  const [hip,setHip]=useState("95"); const [result,setResult]=useState<any>(null);

  function calculate() {
    const h=parseFloat(height)||1, n=parseFloat(neck)||0, w=parseFloat(waist)||0;
    let bf: number;
    if(gender==="male") bf=86.010*Math.log10(w-n)-70.041*Math.log10(h)+36.76;
    else bf=163.205*Math.log10(w+(parseFloat(hip)||0)-n)-97.684*Math.log10(h)-78.387;
    const cat=bf<6?"Essential":bf<14?"Athletic":bf<18?"Fitness":bf<25?"Average":"Obese";
    setResult({ bf, cat });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate Body Fat"
      result={result && <>
        <ResultHeader label="Body Fat Percentage" value={`${result.bf.toFixed(1)}%`} sub={`Category: ${result.cat}`} />
      </>}
    >
      <TwoCol>
        <SelectField label="Gender" id="bfg" value={gender} onChange={setG}
          options={[["male","Male"],["female","Female"]]} />
        <InputField label="Height (cm)"          id="bfh"    value={height}  onChange={setH} />
        <InputField label="Neck (cm)"            id="bfn"    value={neck}    onChange={setN} />
        <InputField label="Waist (cm)"           id="bfw"    value={waist}   onChange={setW} />
        {gender==="female" && <InputField label="Hip (cm)" id="bfhip" value={hip} onChange={setHip} />}
      </TwoCol>
    </CalculatorShell>
  );
}