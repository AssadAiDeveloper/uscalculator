"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

export default function AgeCalculator() {
  const today=new Date().toISOString().split("T")[0];
  const [dob,setDob]=useState("1990-01-01"); const [at,setAt]=useState(today);
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const d=new Date(dob), a=new Date(at);
    if(isNaN(d.getTime())) return;
    let y=a.getFullYear()-d.getFullYear(), m=a.getMonth()-d.getMonth(), dy=a.getDate()-d.getDate();
    if(dy<0){m--;dy+=new Date(a.getFullYear(),a.getMonth(),0).getDate();}
    if(m<0){y--;m+=12;}
    const totalDays=Math.floor((a.getTime()-d.getTime())/86400000);
    setResult({ y, m, dy, totalDays, weeks:Math.floor(totalDays/7) });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Age Is Calculated",
        steps: [
          "Subtract the birth year from the target year to get the base years.",
          "If the birthday hasn't occurred yet in the target year, subtract 1 from the years.",
          "Calculate remaining months and days using the same logic, borrowing from the previous unit when needed.",
          "Total days = difference in milliseconds ÷ 86,400,000 (ms per day).",
        ],
      }} buttonLabel="Calculate Age"
      result={result && <>
        <PrintPDF
              title="Age Calculator"
              icon="🎂"
              inputs={[
                { label: "Date of Birth", value: dob },
                { label: "Age At Date",   value: at },
              ]}
              results={[
                { label: "Age",        value: `${result.y} years, ${result.m} months, ${result.dy} days`, accent: true },
                { label: "Total Days", value: result.totalDays.toLocaleString() },
                { label: "Total Weeks",value: result.weeks.toLocaleString() },
              ]}
            />
        <ResultHeader label="Age" value={`${result.y} years, ${result.m} months, ${result.dy} days`} />
        <ResultRow label="Total Days"  value={result.totalDays.toLocaleString()} />
        <ResultRow label="Total Weeks" value={result.weeks.toLocaleString()} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Date of Birth" id="dob" type="date" value={dob} onChange={setDob} />
        <InputField label="Age At Date"   id="ageat" type="date" value={at} onChange={setAt} />
      </TwoCol>
    </CalculatorShell>
  );
}