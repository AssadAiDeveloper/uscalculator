"use client";
import { useState } from "react";
import { SelectField } from "./CalculatorShell";

function gcd(a:number,b:number):number{return b?gcd(b,a%b):a;}

export default function FractionCalculator() {
  const [n1,setN1]=useState("1"); const [d1,setD1]=useState("2");
  const [op,setOp]=useState("+"); const [n2,setN2]=useState("1");
  const [d2,setD2]=useState("3"); const [result,setResult]=useState<string|null>(null);

  function calculate() {
    const N1=parseInt(n1),D1=parseInt(d1),N2=parseInt(n2),D2=parseInt(d2);
    let rn:number,rd:number;
    if(op==="+"){rn=N1*D2+N2*D1;rd=D1*D2;}
    else if(op==="-"){rn=N1*D2-N2*D1;rd=D1*D2;}
    else if(op==="×"){rn=N1*N2;rd=D1*D2;}
    else{rn=N1*D2;rd=D1*N2;}
    const g=gcd(Math.abs(rn),Math.abs(rd));
    const fn=rn/g, fd=rd/g;
    setResult(fd===1?`${fn}`:fd<0?`${-fn}/${-fd}`:`${fn}/${fd}`);
  }

  function Num({val,set,id}:{val:string,set:(v:string)=>void,id:string}){
    return <input type="number" id={id} value={val} onChange={e=>set(e.target.value)}
      className="w-14 border border-surface-border rounded-lg px-2 py-2 text-center text-base font-bold focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange" />;
  }

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6">
      <div className="flex items-center gap-4 flex-wrap justify-center mb-6">
        <div className="text-center"><Num val={n1} set={setN1} id="fn1" /><div className="border-t-2 border-ink my-1 w-14"/><Num val={d1} set={setD1} id="fd1" /></div>
        <SelectField label="" id="fop" value={op} onChange={setOp}
          options={[["+","+"],["-","−"],["×","×"],["÷","÷"]]} />
        <div className="text-center"><Num val={n2} set={setN2} id="fn2" /><div className="border-t-2 border-ink my-1 w-14"/><Num val={d2} set={setD2} id="fd2" /></div>
        <span className="text-2xl font-bold">=</span>
        <div className="text-2xl font-extrabold text-brand-blue min-w-16 text-center">{result ?? "?"}</div>
      </div>
      <button type="button" onClick={calculate}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 rounded-xl transition-colors">Calculate</button>
    </div>
  );
}