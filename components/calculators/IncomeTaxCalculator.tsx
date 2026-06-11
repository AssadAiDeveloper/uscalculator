"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";
import PrintPDF from "@/components/ui/PrintPDF";

const BRACKETS:any = {
  single:[[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]],
  married:[[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]],
  hoh:[[16550,.10],[63100,.12],[100500,.22],[191950,.24],[243700,.32],[609350,.35],[Infinity,.37]],
};

export default function IncomeTaxCalculator() {
  const [income,setI]=useState("75000"); const [status,setS]=useState("single");
  const [ded,setD]=useState("14600"); const [result,setResult]=useState<any>(null);

  function calculate() {
    const gross=parseFloat(income)||0, taxable=Math.max(0,gross-(parseFloat(ded)||0));
    let tax=0, prev=0;
    for(const [limit,r] of BRACKETS[status]){ tax+=(Math.min(taxable,limit)-prev)*r; prev=limit; if(limit===Infinity||taxable<=limit)break; }
    setResult({ tax, eff:gross>0?tax/gross*100:0, taxable, net:gross-tax });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How US Federal Income Tax Is Calculated",
        formulaLabel: "Progressive Tax Brackets (2024)",
        formula: "Tax = Σ (taxable income in each bracket × bracket rate)",
        steps: [
          "Start with your <strong>gross income</strong> and subtract deductions (standard or itemized) to get <strong>taxable income</strong>.",
          "The US uses a progressive system — you pay different rates on different portions of your income, not one flat rate on all of it.",
          "Example for Single filer with $75,000 taxable income: 10% on first $11,600 + 12% on $11,601–$47,150 + 22% on remainder.",
          "The <strong>effective rate</strong> (total tax ÷ gross income) is always lower than your marginal rate (the rate on your last dollar).",
        ],
        note: "This calculator estimates federal income tax only. State taxes, FICA (Social Security + Medicare), AMT, and credits are not included.",
      }} buttonLabel="Estimate Tax"
      result={result && <>
        <PrintPDF
              title="Income Tax Calculator (US 2024)"
              icon="🧾"
              inputs={[
                { label: "Gross Income",   value: `$${parseFloat(income).toLocaleString()}` },
                { label: "Filing Status",  value: status },
                { label: "Deductions",     value: `$${parseFloat(ded).toLocaleString()}` },
                { label: "Taxable Income", value: `$${result.taxable.toLocaleString("en-US",{maximumFractionDigits:0})}` },
              ]}
              results={[
                { label: "Estimated Federal Tax",  value: `$${result.tax.toFixed(2)}`, accent: true },
                { label: "Effective Tax Rate",     value: `${result.eff.toFixed(2)}%` },
                { label: "After-Tax Income",       value: `$${result.net.toFixed(2)}` },
              ]}
              note="Federal income tax only. State taxes, FICA, AMT, and credits not included. Consult a tax professional."
            />
        <ResultHeader label="Estimated Federal Tax" value={`$${result.tax.toFixed(2)}`} sub={`Effective rate: ${result.eff.toFixed(2)}%`} />
        <ResultRow label="Taxable Income"  value={`$${result.taxable.toLocaleString("en-US",{maximumFractionDigits:0})}`} />
        <ResultRow label="Total Tax"       value={`$${result.tax.toFixed(2)}`} accent />
        <ResultRow label="After-Tax Income" value={`$${result.net.toFixed(2)}`} />
      </>}
    >
      <TwoCol>
        <InputField label="Gross Income ($)"  id="ti" prefix="$" value={income} onChange={setI} />
        <InputField label="Deductions ($)"    id="td" prefix="$" value={ded}    onChange={setD} />
        <SelectField label="Filing Status" id="ts" value={status} onChange={setS}
          options={[["single","Single"],["married","Married Filing Jointly"],["hoh","Head of Household"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}