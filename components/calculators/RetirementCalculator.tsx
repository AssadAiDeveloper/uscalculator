"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

export default function RetirementCalculator() {
  const [age,     setAge]     = useState("30");
  const [retAge,  setRetAge]  = useState("65");
  const [savings, setSavings] = useState("25000");
  const [monthly, setMonthly] = useState("500");
  const [rate,    setRate]    = useState("7");
  const [result,  setResult]  = useState<any>(null);

  function calculate() {
    const years=parseInt(retAge)-parseInt(age), mr=parseFloat(rate)/100/12, months=years*12;
    const P=parseFloat(savings)||0, c=parseFloat(monthly)||0;
    const fv = P*Math.pow(1+mr,months) + c*(Math.pow(1+mr,months)-1)/mr;
    setResult({ fv, years, contributed: P+c*months });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Retirement Savings Are Projected",
        formulaLabel: "Future Value of Annuity + Lump Sum",
        formula: "FV = P(1+r)ⁿ + C × [(1+r)ⁿ − 1] ÷ r",
        steps: [
          "<strong>P</strong> = Current savings, <strong>r</strong> = monthly return (annual ÷ 12), <strong>n</strong> = months to retirement.",
          "<strong>C</strong> = Monthly contribution. Each contribution compounds independently over its remaining time.",
          "The first term grows your existing savings. The second term grows all future contributions.",
          "A higher return rate has an exponential — not linear — effect on the final balance. This is why starting early matters dramatically.",
        ],
        note: "This projection assumes a constant annual return. Real market returns vary year to year. Consider inflation when planning withdrawals.",
      }} buttonLabel="Calculate Retirement Savings"
      result={result && <>
        <PrintPDF
              title="Retirement Calculator"
              icon="🏖️"
              inputs={[
                { label: "Current Age",           value: age },
                { label: "Retirement Age",        value: retAge },
                { label: "Current Savings",       value: `$${parseFloat(savings).toLocaleString()}` },
                { label: "Monthly Contribution",  value: `$${parseFloat(monthly).toLocaleString()}` },
                { label: "Annual Return",         value: `${rate}%` },
              ]}
              results={[
                { label: `Savings at Age ${retAge}`, value: `$${result.fv.toLocaleString("en-US",{maximumFractionDigits:0})}`, accent: true },
                { label: "Total Contributed",        value: `$${result.contributed.toLocaleString("en-US",{maximumFractionDigits:0})}` },
                { label: "Interest Earned",          value: `$${(result.fv-result.contributed).toLocaleString("en-US",{maximumFractionDigits:0})}` },
                { label: "Years to Retirement",      value: `${result.years}` },
              ]}
              formula="FV = P(1+r)ⁿ + C × [(1+r)ⁿ − 1] ÷ r"
              note="Projections assume a constant return rate. Real returns vary. Consider inflation when planning withdrawals."
            />
        <ResultHeader label={`Savings at Age ${retAge}`} value={`$${result.fv.toLocaleString("en-US",{maximumFractionDigits:0})}`}
          sub={`Over ${result.years} years`} />
        <ResultRow label="Total Contributed" value={`$${result.contributed.toLocaleString("en-US",{maximumFractionDigits:0})}`} />
        <ResultRow label="Interest Earned"   value={`$${(result.fv-result.contributed).toLocaleString("en-US",{maximumFractionDigits:0})}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Current Age"           id="ra"  value={age}     onChange={setAge} />
        <InputField label="Retirement Age"        id="rra" value={retAge}  onChange={setRetAge} />
        <InputField label="Current Savings ($)"   id="rs"  prefix="$" value={savings}  onChange={setSavings} />
        <InputField label="Monthly Contribution ($)" id="rm" prefix="$" value={monthly} onChange={setMonthly} />
        <InputField label="Annual Return (%)"     id="rr"  suffix="%" value={rate}    onChange={setRate} step="0.1" />
      </TwoCol>
    </CalculatorShell>
  );
}