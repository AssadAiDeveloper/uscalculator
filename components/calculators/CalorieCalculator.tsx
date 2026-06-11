"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

export default function CalorieCalculator() {
  const [age,setAge]=useState("30"); const [gender,setG]=useState("male");
  const [height,setH]=useState("175"); const [weight,setW]=useState("75");
  const [activity,setAct]=useState("1.55"); const [result,setResult]=useState<any>(null);

  function calculate() {
    const a=parseFloat(age)||0, h=parseFloat(height)||0, w=parseFloat(weight)||0, act=parseFloat(activity);
    const bmr = gender==="male" ? 10*w+6.25*h-5*a+5 : 10*w+6.25*h-5*a-161;
    const tdee = bmr*act;
    setResult({ tdee, bmr, loss:tdee-500, gain:tdee+500 });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Daily Calorie Needs Are Calculated",
        formulaLabel: "Mifflin-St Jeor Equation",
        formula: "BMR (male) = 10W + 6.25H − 5A + 5   |   BMR (female) = 10W + 6.25H − 5A − 161",
        steps: [
          "<strong>W</strong> = Weight in kg, <strong>H</strong> = Height in cm, <strong>A</strong> = Age in years.",
          "This gives your <strong>Basal Metabolic Rate (BMR)</strong> — calories burned at complete rest.",
          "Multiply BMR by your <strong>activity factor</strong>: Sedentary ×1.2 · Light ×1.375 · Moderate ×1.55 · Very Active ×1.725.",
          "The result is your <strong>TDEE</strong> (Total Daily Energy Expenditure) — the calories needed to maintain your current weight.",
          "To lose weight: subtract ~500 cal/day (≈ 0.5 kg/week). To gain: add ~500 cal/day.",
        ],
        note: "The Mifflin-St Jeor equation is the most accurate formula for most people. Results are estimates — individual metabolism varies.",
      }} buttonLabel="Calculate Calories"
      result={result && <>
        <PrintPDF
              title="Calorie Calculator"
              icon="🍎"
              inputs={[
                { label: "Age",      value: `${age} years` },
                { label: "Gender",   value: gender },
                { label: "Height",   value: `${height} cm` },
                { label: "Weight",   value: `${weight} kg` },
              ]}
              results={[
                { label: "Daily Calories (TDEE)", value: `${result.tdee.toFixed(0)} cal`, accent: true },
                { label: "BMR",                   value: `${result.bmr.toFixed(0)} cal` },
                { label: "Weight Loss Target",    value: `${result.loss.toFixed(0)} cal/day` },
                { label: "Weight Gain Target",    value: `${result.gain.toFixed(0)} cal/day` },
              ]}
              formula="TDEE = BMR × Activity Factor   |   Mifflin-St Jeor: 10W + 6.25H − 5A ± constant"
              note="Calorie needs are estimates. Individual metabolism varies. Consult a nutritionist for personalized advice."
            />
        <ResultHeader label="Daily Calorie Needs" value={`${result.tdee.toFixed(0)} cal`} sub={`BMR: ${result.bmr.toFixed(0)} calories`} />
        <ResultRow label="Weight Loss (−500 cal)" value={`${result.loss.toFixed(0)} cal/day`} />
        <ResultRow label="Maintenance"            value={`${result.tdee.toFixed(0)} cal/day`} />
        <ResultRow label="Weight Gain (+500 cal)" value={`${result.gain.toFixed(0)} cal/day`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Age"        id="ca" value={age}    onChange={setAge} />
        <SelectField label="Gender" id="cg" value={gender} onChange={setG}
          options={[["male","Male"],["female","Female"]]} />
        <InputField label="Height (cm)" id="ch" value={height} onChange={setH} />
        <InputField label="Weight (kg)" id="cw" value={weight} onChange={setW} />
        <SelectField label="Activity Level" id="cact" value={activity} onChange={setAct}
          options={[["1.2","Sedentary"],["1.375","Lightly Active"],["1.55","Moderately Active"],["1.725","Very Active"],["1.9","Extra Active"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}