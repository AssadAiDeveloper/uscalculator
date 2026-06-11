"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate,      setRate]      = useState("7");
  const [years,     setYears]     = useState("10");
  const [freq,      setFreq]      = useState("12");
  const [contrib,   setContrib]   = useState("100");
  const [result,    setResult]    = useState<any>(null);

  function calculate() {
    const P = parseFloat(principal)||0, r = parseFloat(rate)/100;
    const n = parseInt(freq), t = parseFloat(years)||1, c = parseFloat(contrib)||0;
    const fv = P*Math.pow(1+r/n,n*t) + (c>0 ? c*(Math.pow(1+r/12,t*12)-1)/(r/12) : 0);
    const contributed = P + c*t*12;
    setResult({ fv, contributed, gain: fv-contributed });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Compound Interest Works",
        formulaLabel: "Future Value Formula",
        formula: "FV = P × (1 + r/n)^(n×t)   +   C × [(1 + r/n)^(n×t) − 1] ÷ (r/n)",
        steps: [
          "<strong>P</strong> = Initial principal (starting amount).",
          "<strong>r</strong> = Annual interest rate as a decimal (e.g. 7% = 0.07).",
          "<strong>n</strong> = Compounding frequency per year (monthly = 12, daily = 365).",
          "<strong>t</strong> = Time in years.",
          "<strong>C</strong> = Monthly contribution. The second term calculates the future value of all contributions combined.",
          "Compounding means interest earns interest — more frequent compounding leads to higher returns.",
        ],
        note: "Results are pre-tax. Consider tax-advantaged accounts (401k, IRA, Roth) to maximize long-term growth.",
      }} buttonLabel="Calculate Growth"
      result={result && <>
        <PrintPDF
              title="Compound Interest Calculator"
              icon="📈"
              inputs={[
                { label: "Principal",           value: `$${parseFloat(principal).toLocaleString()}` },
                { label: "Annual Rate",         value: `${rate}%` },
                { label: "Years",               value: years },
                { label: "Monthly Contribution",value: `$${parseFloat(contrib).toLocaleString()}` },
                { label: "Compound Frequency",  value: freq === "1" ? "Annually" : freq === "12" ? "Monthly" : freq === "4" ? "Quarterly" : "Daily" },
              ]}
              results={[
                { label: "Future Value",       value: `$${result.fv.toLocaleString("en-US",{maximumFractionDigits:2})}`, accent: true },
                { label: "Total Contributed",  value: `$${result.contributed.toLocaleString("en-US",{maximumFractionDigits:2})}` },
                { label: "Interest Earned",    value: `$${result.gain.toLocaleString("en-US",{maximumFractionDigits:2})}` },
              ]}
              formula="FV = P × (1 + r/n)^(n×t)"
              note="Past returns do not guarantee future results. Consider tax-advantaged accounts to maximize growth."
            />
        <ResultHeader label="Future Value" value={`$${result.fv.toLocaleString("en-US",{maximumFractionDigits:2})}`} />
        <ResultRow label="Total Contributed" value={`$${result.contributed.toLocaleString("en-US",{maximumFractionDigits:2})}`} />
        <ResultRow label="Interest Earned"   value={`$${result.gain.toLocaleString("en-US",{maximumFractionDigits:2})}`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Principal ($)"     id="cp"  prefix="$" value={principal} onChange={setPrincipal} />
        <InputField label="Annual Rate (%)"   id="cr"  suffix="%" value={rate}      onChange={setRate} step="0.1" />
        <InputField label="Years"             id="ct"  value={years}    onChange={setYears} />
        <InputField label="Monthly Contrib ($)" id="cc" prefix="$" value={contrib} onChange={setContrib} />
        <SelectField label="Compound Frequency" id="cf" value={freq} onChange={setFreq}
          options={[["1","Annually"],["4","Quarterly"],["12","Monthly"],["365","Daily"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}