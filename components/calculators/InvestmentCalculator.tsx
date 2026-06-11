"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function InvestmentCalculator() {
  const [init,      setInit]      = useState("10000");
  const [monthly,   setMonthly]   = useState("500");
  const [rate,      setRate]      = useState("8");
  const [years,     setYears]     = useState("20");
  const [inflation, setInflation] = useState("2.5");
  const [result,    setResult]    = useState<any>(null);

  function calculate() {
    const P=parseFloat(init)||0, c=parseFloat(monthly)||0;
    const r=parseFloat(rate)/100, t=parseFloat(years)||1, inf=parseFloat(inflation)/100;
    const mr=r/12, months=t*12;
    const fv = P*Math.pow(1+mr,months) + c*(Math.pow(1+mr,months)-1)/mr;
    const contributed = P + c*months;
    setResult({ fv, contributed, gain: fv-contributed, real: fv/Math.pow(1+inf,t) });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Investment Returns Are Projected",
        formulaLabel: "Future Value with Monthly Contributions",
        formula: "FV = P(1 + r/12)^(12t) + C × [(1 + r/12)^(12t) − 1] ÷ (r/12)",
        steps: [
          "<strong>P</strong> = Initial investment, <strong>r</strong> = annual return rate, <strong>t</strong> = years, <strong>C</strong> = monthly contribution.",
          "The first term compounds your starting amount. The second term compounds your ongoing contributions.",
          "Inflation adjustment divides the nominal future value by (1 + inflation rate)^years to show purchasing power.",
          "The difference between nominal and inflation-adjusted values shows how much of your 'gain' is actually just keeping pace with rising prices.",
        ],
        note: "Past market performance does not guarantee future results. Diversification and long time horizons reduce but do not eliminate risk.",
      }} buttonLabel="Calculate Returns"
      result={result && <>
        <ResultHeader label="Future Value" value={`$${result.fv.toLocaleString("en-US",{maximumFractionDigits:0})}`} />
        <ResultRow label="Total Contributed"       value={`$${result.contributed.toLocaleString("en-US",{maximumFractionDigits:0})}`} />
        <ResultRow label="Investment Gain"         value={`$${result.gain.toLocaleString("en-US",{maximumFractionDigits:0})}`} accent />
        <ResultRow label="Inflation-Adjusted Value" value={`$${result.real.toLocaleString("en-US",{maximumFractionDigits:0})}`} />
      </>}
    >
      <TwoCol>
        <InputField label="Initial Amount"      id="ii" prefix="$" value={init}      onChange={setInit} />
        <InputField label="Monthly Contribution" id="im" prefix="$" value={monthly}   onChange={setMonthly} />
        <InputField label="Annual Return (%)"   id="ir" suffix="%" value={rate}      onChange={setRate} step="0.1" />
        <InputField label="Years"               id="iy" value={years}     onChange={setYears} />
        <InputField label="Inflation Rate (%)"  id="if" suffix="%" value={inflation} onChange={setInflation} step="0.1" />
      </TwoCol>
    </CalculatorShell>
  );
}