"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function BMRCalculator() {
  const [gender,setG]=useState("male"); const [age,setA]=useState("30");
  const [height,setH]=useState("175"); const [weight,setW]=useState("70");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const a=parseFloat(age)||0, h=parseFloat(height)||0, w=parseFloat(weight)||0;
    const bmr=gender==="male"?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;
    setResult({ bmr, sedentary:bmr*1.2, moderate:bmr*1.55, active:bmr*1.725 });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "What Is BMR and How Is It Calculated?",
        formulaLabel: "Mifflin-St Jeor Equation (most accurate)",
        formula: "Male: 10W + 6.25H − 5A + 5   |   Female: 10W + 6.25H − 5A − 161",
        steps: [
          "BMR = <strong>Basal Metabolic Rate</strong> — the number of calories your body burns at complete rest just to maintain basic functions (breathing, circulation, cell repair).",
          "<strong>W</strong> = Weight (kg), <strong>H</strong> = Height (cm), <strong>A</strong> = Age (years).",
          "Men have a slightly higher BMR than women due to greater average muscle mass (+5 vs −161 constant).",
          "Multiply BMR by an activity factor to get TDEE — your actual daily calorie burn.",
        ],
        note: "BMR accounts for roughly 60–75% of total daily calorie expenditure for most people.",
      }} buttonLabel="Calculate BMR"
      result={result && <>
        <ResultHeader label="Basal Metabolic Rate" value={`${result.bmr.toFixed(0)} cal/day`} />
        <ResultRow label="Sedentary TDEE"   value={`${result.sedentary.toFixed(0)} cal`} />
        <ResultRow label="Moderate TDEE"    value={`${result.moderate.toFixed(0)} cal`} />
        <ResultRow label="Active TDEE"      value={`${result.active.toFixed(0)} cal`} accent />
      </>}
    >
      <TwoCol>
        <SelectField label="Gender" id="bmrg" value={gender} onChange={setG}
          options={[["male","Male"],["female","Female"]]} />
        <InputField label="Age"         id="bmra" value={age}    onChange={setA} />
        <InputField label="Height (cm)" id="bmrh" value={height} onChange={setH} />
        <InputField label="Weight (kg)" id="bmrw" value={weight} onChange={setW} />
      </TwoCol>
    </CalculatorShell>
  );
}