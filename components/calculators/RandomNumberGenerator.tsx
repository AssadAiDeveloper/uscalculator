"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, TwoCol } from "./CalculatorShell";

export default function RandomNumberGenerator() {
  const [min,setMin]=useState("1"); const [max,setMax]=useState("100");
  const [count,setCount]=useState("1"); const [dup,setDup]=useState("yes");
  const [result,setResult]=useState<number[]|null>(null);

  function generate() {
    const mn=parseInt(min), mx=parseInt(max), ct=Math.min(100,parseInt(count)||1);
    if(mn>=mx){alert("Min must be less than max.");return;}
    if(dup==="no"&&ct>mx-mn+1){alert("Not enough unique numbers.");return;}
    const nums:number[]=[];
    while(nums.length<ct){
      const r=Math.floor(Math.random()*(mx-mn+1))+mn;
      if(dup==="yes"||!nums.includes(r))nums.push(r);
    }
    setResult(nums);
  }

  return (
    <CalculatorShell onCalculate={generate} buttonLabel="🎲 Generate Numbers"
      result={result && <div>
        <p className="text-2xs text-ink-faint uppercase tracking-widest font-semibold mb-3">Generated Numbers</p>
        <div className="flex flex-wrap gap-2">
          {result.map((n,i)=>(
            <span key={i} className="bg-brand-blue text-white px-3 py-1.5 rounded-lg font-bold text-sm">{n}</span>
          ))}
        </div>
      </div>}
    >
      <TwoCol>
        <InputField label="Minimum"      id="rmin" value={min}   onChange={setMin} />
        <InputField label="Maximum"      id="rmax" value={max}   onChange={setMax} />
        <InputField label="How Many"     id="rct"  value={count} onChange={setCount} min="1" max="100" />
        <SelectField label="Duplicates" id="rdup" value={dup} onChange={setDup}
          options={[["yes","Allow Duplicates"],["no","No Duplicates"]]} />
      </TwoCol>
    </CalculatorShell>
  );
}