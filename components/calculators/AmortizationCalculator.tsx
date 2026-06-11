"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function AmortizationCalculator() {
  const [amount, setAmount] = useState("200000");
  const [rate,   setRate]   = useState("6.5");
  const [term,   setTerm]   = useState("30");
  const [extra,  setExtra]  = useState("0");
  const [result, setResult] = useState<any>(null);

  function calculate() {
    const P=parseFloat(amount)||0, r=parseFloat(rate)/100/12, n=parseInt(term)*12;
    const base = r===0?P/n:P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    const pmt  = base + (parseFloat(extra)||0);
    let bal=P, totalInt=0, month=0, rows=[];
    while(bal>0.01 && month<n*2){
      month++;
      const int=bal*r, princPay=Math.min(pmt-int,bal);
      totalInt+=int; bal=Math.max(0,bal-princPay);
      if(month<=12) rows.push({month,pmt:pmt.toFixed(2),princ:princPay.toFixed(2),int:int.toFixed(2),bal:bal.toFixed(2)});
    }
    setResult({ base, totalInt, month, rows });
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Generate Schedule"
      result={result && <div>
        <ResultHeader label="Monthly Payment" value={`$${result.base.toFixed(2)}`} sub={`Paid off in ${result.month} months`} />
        <ResultRow label="Total Interest" value={`$${result.totalInt.toLocaleString("en-US",{maximumFractionDigits:2})}`} accent />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="bg-surface-muted text-ink-muted uppercase tracking-wide">
              {["Month","Payment","Principal","Interest","Balance"].map(h=><th key={h} className="px-3 py-2 text-right first:text-left font-semibold">{h}</th>)}
            </tr></thead>
            <tbody className="divide-y divide-surface-border">
              {result.rows.map((r:any,i:number)=>(
                <tr key={r.month} className={i%2===0?"bg-white":"bg-surface-muted/40"}>
                  <td className="px-3 py-2">{r.month}</td>
                  <td className="px-3 py-2 text-right">${r.pmt}</td>
                  <td className="px-3 py-2 text-right text-emerald-700">${r.princ}</td>
                  <td className="px-3 py-2 text-right text-red-500">${r.int}</td>
                  <td className="px-3 py-2 text-right text-ink-muted">${r.bal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-2xs text-ink-faint mt-2 text-center">Showing first 12 months</p>
        </div>
      </div>}
    >
      <TwoCol>
        <InputField label="Loan Amount ($)"        id="ama" prefix="$" value={amount} onChange={setAmount} />
        <InputField label="Annual Interest Rate (%)" id="amr" suffix="%" value={rate}  onChange={setRate} step="0.01" />
        <InputField label="Loan Term (years)"      id="amt" value={term}  onChange={setTerm} />
        <InputField label="Extra Monthly Payment ($)" id="ame" prefix="$" value={extra} onChange={setExtra} />
      </TwoCol>
    </CalculatorShell>
  );
}