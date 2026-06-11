"use client";
import { useState } from "react";
import { SelectField, InputField, TwoCol } from "./CalculatorShell";

const DATA:any={
  length:{units:["meter","kilometer","centimeter","millimeter","mile","yard","foot","inch"],to_m:[1,1000,.01,.001,1609.344,.9144,.3048,.0254]},
  weight:{units:["kilogram","gram","pound","ounce","ton"],to_kg:[1,.001,.453592,.0283495,1000]},
  temperature:{units:["Celsius","Fahrenheit","Kelvin"],special:true},
  area:{units:["sq meter","sq kilometer","sq foot","sq mile","acre","hectare"],to_m2:[1,1e6,.092903,2589988,4046.86,10000]},
  volume:{units:["liter","milliliter","gallon (US)","quart","pint","cup","fluid oz"],to_L:[1,.001,3.78541,.946353,.473176,.236588,.0295735]},
  speed:{units:["km/h","m/s","mph","knot"],to_ms:[.277778,1,.44704,.514444]},
};

function convertTemp(val:number,from:number,to:number){
  const units=["Celsius","Fahrenheit","Kelvin"];
  let c:number;
  if(from===0)c=val; else if(from===1)c=(val-32)*5/9; else c=val-273.15;
  if(to===0)return c; if(to===1)return c*9/5+32; return c+273.15;
}

export default function ConversionCalculator() {
  const [cat,setCat]=useState("length"); const [val,setVal]=useState("1");
  const [from,setFrom]=useState("0"); const [to,setTo]=useState("1");
  const [result,setResult]=useState<string|null>(null);

  const d=DATA[cat];
  const unitOpts:([string,string][])=d.units.map((u:string,i:number)=>[String(i),u]);

  function calculate(){
    const v=parseFloat(val)||0, fi=parseInt(from), ti=parseInt(to);
    let res:number;
    if(d.special){res=convertTemp(v,fi,ti);}
    else{
      const base=v*(d.to_m||d.to_kg||d.to_L||d.to_m2||d.to_ms)[fi];
      res=base/(d.to_m||d.to_kg||d.to_L||d.to_m2||d.to_ms)[ti];
    }
    setResult(`${v} ${d.units[fi]} = ${res.toPrecision(6).replace(/\.?0+$/,"")} ${d.units[ti]}`);
  }

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 space-y-4">
      <SelectField label="Category" id="convcat" value={cat} onChange={v=>{setCat(v);setFrom("0");setTo("1");setResult(null);}}
        options={Object.keys(DATA).map(k=>[k,k.charAt(0).toUpperCase()+k.slice(1)])} />
      <InputField label="Value" id="convval" value={val} onChange={setVal} step="any" />
      <TwoCol>
        <SelectField label="From" id="convfrom" value={from} onChange={setFrom} options={unitOpts} />
        <SelectField label="To"   id="convto"   value={to}   onChange={setTo}   options={unitOpts} />
      </TwoCol>
      <button type="button" onClick={calculate}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 rounded-xl transition-colors">Convert</button>
      {result&&<div className="bg-surface-muted rounded-xl p-4 text-center text-base font-bold text-brand-blue">{result}</div>}
    </div>
  );
}