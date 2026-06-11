"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, TwoCol } from "./CalculatorShell";

export default function TimeCalculator() {
  const [start,setStart]=useState("08:30:00"); const [op,setOp]=useState("add");
  const [h,setH]=useState("2"); const [m,setM]=useState("45"); const [s,setS]=useState("0");
  const [result,setResult]=useState<string|null>(null);

  function calculate() {
    const parts=start.split(":"), total=parseInt(parts[0]||"0")*3600+parseInt(parts[1]||"0")*60+parseInt(parts[2]||"0");
    const delta=(parseInt(h)||0)*3600+(parseInt(m)||0)*60+(parseInt(s)||0);
    let res=op==="add"?total+delta:total-delta;
    res=((res%86400)+86400)%86400;
    const rh=Math.floor(res/3600), rm=Math.floor((res%3600)/60), rs=res%60;
    setResult(`${String(rh).padStart(2,"0")}:${String(rm).padStart(2,"0")}:${String(rs).padStart(2,"0")}`);
  }

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="Calculate"
      result={result && <ResultHeader label="Result" value={result} />}
    >
      <InputField label="Start Time (hh:mm:ss)" id="tcst" type="text" value={start} onChange={setStart} />
      <SelectField label="Operation" id="tcop" value={op} onChange={setOp}
        options={[["add","Add Time"],["sub","Subtract Time"]]} />
      <TwoCol>
        <InputField label="Hours"   id="tch" value={h} onChange={setH} min="0" />
        <InputField label="Minutes" id="tcm" value={m} onChange={setM} min="0" />
        <InputField label="Seconds" id="tcs" value={s} onChange={setS} min="0" />
      </TwoCol>
    </CalculatorShell>
  );
}