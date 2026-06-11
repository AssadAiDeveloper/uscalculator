"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

export default function SalaryCalculator() {
  const [amount,setA]=useState("65000"); const [period,setP]=useState("annual");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const v=parseFloat(amount)||0;
    const annual = period==="annual"?v:period==="monthly"?v*12:period==="biweekly"?v*26:period==="weekly"?v*52:v*40*52;
    setResult({ annual, monthly:annual/12, biweekly:annual/26, weekly:annual/52, daily:annual/260, hourly:annual/2080 });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Salary Conversions Work",
        steps: [
          "All conversions use a standard work year: <strong>52 weeks</strong>, <strong>5 days/week</strong>, <strong>8 hours/day</strong> = 2,080 hours/year.",
          "Annual → Monthly: divide by 12. Annual → Bi-Weekly: divide by 26. Annual → Weekly: divide by 52.",
          "Annual → Hourly: divide by 2,080 (assuming 40-hour weeks, no overtime).",
          "These are gross (pre-tax) figures. Net take-home pay depends on your tax bracket, deductions, and benefits.",
        ],
      }} buttonLabel="Convert Salary"
      result={result && <div>
        <PrintPDF
              title="Salary Calculator"
              icon="💼"
              inputs={[
                { label: "Salary Amount", value: `$${parseFloat(amount).toLocaleString()}` },
                { label: "Pay Period",    value: period },
              ]}
              results={[
                { label: "Annual",    value: `$${result.annual.toLocaleString("en-US",{maximumFractionDigits:2})}`, accent: true },
                { label: "Monthly",   value: `$${result.monthly.toFixed(2)}` },
                { label: "Bi-Weekly", value: `$${result.biweekly.toFixed(2)}` },
                { label: "Weekly",    value: `$${result.weekly.toFixed(2)}` },
                { label: "Daily",     value: `$${result.daily.toFixed(2)}` },
                { label: "Hourly",    value: `$${result.hourly.toFixed(2)}` },
              ]}
              note="Gross (pre-tax) figures. Net pay depends on your tax bracket, deductions, and benefits."
            />
        <ResultRow label="Annual"    value={`$${result.annual.toLocaleString("en-US",{maximumFractionDigits:2})}`} large />
        <ResultRow label="Monthly"   value={`$${result.monthly.toFixed(2)}`} />
        <ResultRow label="Bi-Weekly" value={`$${result.biweekly.toFixed(2)}`} />
        <ResultRow label="Weekly"    value={`$${result.weekly.toFixed(2)}`} />
        <ResultRow label="Daily (5d)"value={`$${result.daily.toFixed(2)}`} />
        <ResultRow label="Hourly"    value={`$${result.hourly.toFixed(2)}`} />
      </div>}
    >
      <TwoCol>
        <InputField label="Salary Amount ($)" id="sa" prefix="$" value={amount} onChange={setA} />
        <SelectField label="Pay Period" id="sp" value={period} onChange={setP}
          options={[["annual","Annual"],["monthly","Monthly"],["biweekly","Bi-Weekly"],["weekly","Weekly"],["hourly","Hourly (40h/wk)"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}