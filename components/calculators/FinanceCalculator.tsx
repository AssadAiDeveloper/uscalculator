"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, TwoCol } from "./CalculatorShell";

export default function FinanceCalculator() {
  const [solve,setSolve]=useState("fv"); const [pv,setPV]=useState("10000");
  const [fv,setFV]=useState("20000"); const [rate,setR]=useState("6");
  const [n,setN]=useState("10"); const [pmt,setPmt]=useState("0");
  const [result,setResult]=useState<string|null>(null);

  function calculate() {
    const PV=parseFloat(pv)||0, FV=parseFloat(fv)||0, r=parseFloat(rate)/100;
    const N=parseFloat(n)||1, PMT=parseFloat(pmt)||0;
    let label="";
    if(solve==="fv"){
      const val=PV*Math.pow(1+r,N)+(PMT?PMT*(Math.pow(1+r,N)-1)/r:0);
      label=`Future Value: $${val.toFixed(2)}`;
    } else if(solve==="pv"){
      const val=FV/Math.pow(1+r,N)-(PMT?PMT*(1-Math.pow(1+r,-N))/r:0);
      label=`Present Value: $${val.toFixed(2)}`;
    } else if(solve==="rate"){
      let rt=0.05;
      for(let i=0;i<200;i++){const f=PV*Math.pow(1+rt,N)-FV;const df=PV*N*Math.pow(1+rt,N-1);rt-=f/df;}
      label=`Annual Rate: ${(rt*100).toFixed(4)}%`;
    } else {
      const val=Math.log(FV/PV)/Math.log(1+r);
      label=`Periods: ${val.toFixed(2)} years`;
    }
    setResult(label);
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Solve"
      result={result && <ResultHeader label="Result" value={result} />}
    >
      <SelectField label="Solve For" id="fs" value={solve} onChange={setSolve}
        options={[["fv","Future Value"],["pv","Present Value"],["rate","Interest Rate"],["n","Number of Periods"]]} />
      <TwoCol>
        {solve!=="pv"  && <InputField label="Present Value ($)"  id="fpv" prefix="$" value={pv}  onChange={setPV} />}
        {solve!=="fv"  && <InputField label="Future Value ($)"   id="ffv" prefix="$" value={fv}  onChange={setFV} />}
        {solve!=="rate"&& <InputField label="Annual Rate (%)"    id="fr"  suffix="%" value={rate} onChange={setR} step="0.01" />}
        {solve!=="n"   && <InputField label="Periods (years)"    id="fn"  value={n}  onChange={setN} />}
        <InputField label="Payment/Period ($)" id="fp" prefix="$" value={pmt} onChange={setPmt} />
      </TwoCol>
    </CalculatorShell>
  );
}