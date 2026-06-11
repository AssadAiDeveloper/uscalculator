"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function ConcreteCalculator() {
  const [shape,setShape]=useState("slab"); const [unit,setUnit]=useState("ft");
  const [l,setL]=useState("10"); const [w,setW]=useState("10"); const [d,setD]=useState("0.5");
  const [dia,setDia]=useState("1"); const [h,setH]=useState("3");
  const [qty,setQty]=useState("1"); const [price,setPrice]=useState("125");
  const [result,setResult]=useState<any>(null);

  function calculate(){
    const toFt:any={ft:1,m:3.28084,in:1/12}, f=toFt[unit], q=parseInt(qty)||1;
    let vol:number;
    if(shape==="slab") vol=(parseFloat(l)||0)*f*(parseFloat(w)||0)*f*(parseFloat(d)||0)*f*q;
    else{const r=(parseFloat(dia)||0)*f/2;vol=Math.PI*r*r*(parseFloat(h)||0)*f*q;}
    const yd3=vol/27, bags60=Math.ceil(vol/0.45), bags80=Math.ceil(vol/0.60);
    setResult({ yd3, ft3:vol, bags60, bags80, cost:yd3*(parseFloat(price)||0) });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Concrete Volume Is Calculated",
        steps: [
          "<strong>Slab/Footing</strong>: Volume = length × width × depth. Result is in cubic feet.",
          "<strong>Column</strong>: Volume = π × radius² × height (cylinder formula).",
          "Convert cubic feet to cubic yards by dividing by 27 (1 cubic yard = 27 cubic feet).",
          "Concrete is typically sold by the cubic yard. Add 5–10% extra to account for spillage and uneven sub-base.",
          "One 60 lb bag = ~0.45 ft³. One 80 lb bag = ~0.60 ft³.",
        ],
        note: "For large pours (>1 cubic yard), ready-mix delivery is more economical than bags. Always wear appropriate safety gear when mixing concrete.",
      }} buttonLabel="Calculate Concrete"
      result={result && <>
        <ResultHeader label="Concrete Needed" value={`${result.yd3.toFixed(3)} cubic yards`} sub={`${result.ft3.toFixed(2)} cubic feet`} />
        <ResultRow label="60 lb bags needed" value={`${result.bags60}`} />
        <ResultRow label="80 lb bags needed" value={`${result.bags80}`} />
        <ResultRow label="Estimated Cost"    value={`$${result.cost.toFixed(2)}`} accent />
      </>}
    >
      <TwoCol>
        <SelectField label="Shape" id="ccs" value={shape} onChange={setShape}
          options={[["slab","Slab / Footing"],["column","Column (Circular)"]]} />
        <SelectField label="Unit" id="ccu" value={unit} onChange={setUnit}
          options={[["ft","Feet"],["m","Meters"],["in","Inches"]]} />
      </TwoCol>
      {shape==="slab"?(<TwoCol>
        <InputField label="Length" id="ccl" value={l} onChange={setL} step="0.1" />
        <InputField label="Width"  id="ccw" value={w} onChange={setW} step="0.1" />
        <InputField label="Depth / Thickness" id="ccd" value={d} onChange={setD} step="0.01" />
      </TwoCol>):(<TwoCol>
        <InputField label="Diameter" id="ccdia" value={dia} onChange={setDia} step="0.1" />
        <InputField label="Height"   id="cch"   value={h}   onChange={setH}   step="0.1" />
      </TwoCol>)}
      <TwoCol>
        <InputField label="Number of Sections" id="ccq" value={qty}   onChange={setQty} min="1" />
        <InputField label="Price per cu yd ($)" id="ccp" prefix="$" value={price} onChange={setPrice} />
      </TwoCol>
    </CalculatorShell>
  );
}