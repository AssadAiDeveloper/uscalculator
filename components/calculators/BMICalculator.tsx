"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, TwoCol } from "./CalculatorShell";

const CATS=[
  {label:"Underweight", max:18.5, color:"#3B82F6", bg:"#EFF6FF"},
  {label:"Normal",      max:25,   color:"#10B981", bg:"#ECFDF5"},
  {label:"Overweight",  max:30,   color:"#F59E0B", bg:"#FFFBEB"},
  {label:"Obese",       max:99,   color:"#EF4444", bg:"#FEF2F2"},
];
function getCat(bmi:number){return CATS.find(c=>bmi<c.max)??CATS[3];}

function GaugeChart({bmi}:{bmi:number}){
  const pct=Math.min(100,Math.max(0,((bmi-10)/30)*100));
  const segments=[
    {color:"#3B82F6",w:28},{color:"#10B981",w:22},{color:"#F59E0B",w:18},{color:"#EF4444",w:32}
  ];
  return(
    <div style={{marginTop:8}}>
      <div style={{position:"relative",height:20,borderRadius:10,overflow:"hidden",display:"flex",marginBottom:6}}>
        {segments.map((s,i)=><div key={i} style={{width:`${s.w}%`,background:s.color}}/>)}
        <div style={{position:"absolute",top:"50%",transform:"translateX(-50%) translateY(-50%)",left:`${pct}%`,width:14,height:14,borderRadius:"50%",background:"#fff",boxShadow:"0 0 0 3px #1E293B",transition:"left .5s ease"}}/>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#94A3B8",padding:"0 2px"}}>
        <span>10</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
      </div>
    </div>
  );
}

export default function BMICalculator(){
  const [unit,setUnit]=useState<"metric"|"imperial">("metric");
  const [wt,setWt]=useState("70"); const [ht,setHt]=useState("175");
  const [lb,setLb]=useState("154"); const [ft,setFt]=useState("5"); const [inch,setInch]=useState("9");
  const [result,setResult]=useState<{bmi:number;cat:typeof CATS[0];minKg:number;maxKg:number}|null>(null);

  function calculate(){
    let bmi:number, hm:number;
    if(unit==="metric"){
      const w=parseFloat(wt)||0; hm=(parseFloat(ht)||1)/100;
      bmi=w/(hm*hm);
    } else {
      const w=parseFloat(lb)||0; const h=(parseFloat(ft)||0)*12+(parseFloat(inch)||0);
      hm=h*0.0254; bmi=(w/(h*h))*703;
    }
    if(!isFinite(bmi)||bmi<=0){alert("Please enter valid height and weight.");return;}
    const cat=getCat(bmi);
    setResult({bmi,cat,minKg:18.5*hm*hm,maxKg:24.9*hm*hm});
  }

  function printPDF(){
    if(!result)return;
    const date=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
    const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>BMI Calculator</title>
<style>body{font-family:Arial,sans-serif;font-size:13px;color:#1E293B;padding:32px 40px;max-width:600px;margin:0 auto}
.brand{font-size:20px;font-weight:900;color:#1B3A6B;margin-bottom:4px}.brand span{color:#F97316}
hr{border:none;border-top:3px solid #1B3A6B;margin:10px 0 20px}
.big{font-size:36px;font-weight:900;color:${result.cat.color};margin:10px 0}
table{width:100%;border-collapse:collapse;margin-top:16px}
td{padding:9px 12px;border-bottom:1px solid #F1F5F9}
td:last-child{font-weight:700;text-align:right}
.note{font-size:10px;color:#94A3B8;margin-top:20px;border-top:1px solid #E2E8F0;padding-top:12px}
@media print{@page{margin:20mm;size:A4}}</style></head><body>
<div class="brand">US<span>Calculator</span>.net</div>
<div style="font-size:11px;color:#94A3B8">${date}</div><hr>
<div style="font-size:22px;font-weight:900">⚖️ BMI Calculator Results</div>
<div class="big">${result.bmi.toFixed(1)}</div>
<div style="font-size:18px;font-weight:700;color:${result.cat.color}">${result.cat.label}</div>
<table>
<tr><td>Unit System</td><td>${unit==="metric"?"Metric (kg/cm)":"Imperial (lb/ft)"}</td></tr>
<tr><td>Weight</td><td>${unit==="metric"?wt+" kg":lb+" lbs"}</td></tr>
<tr><td>Height</td><td>${unit==="metric"?ht+" cm":ft+"ft "+inch+"in"}</td></tr>
<tr><td>BMI</td><td>${result.bmi.toFixed(1)}</td></tr>
<tr><td>Category</td><td>${result.cat.label}</td></tr>
<tr><td>Healthy Weight Range</td><td>${result.minKg.toFixed(1)}–${result.maxKg.toFixed(1)} kg (${(result.minKg*2.205).toFixed(0)}–${(result.maxKg*2.205).toFixed(0)} lbs)</td></tr>
</table>
<div class="note">BMI is a screening tool only, not a diagnostic measure. Results may not apply to athletes, children, pregnant women, or the elderly. Consult a healthcare professional for a complete assessment.</div>
</body></html>`;
    const w=window.open("","_blank","width=700,height=600");
    if(!w)return; w.document.write(html); w.document.close(); w.onload=()=>{w.focus();w.print();};
  }

  return(
    <CalculatorShell onCalculate={calculate} buttonLabel="⚖️ Calculate BMI"
      howItWorks={{title:"How BMI Is Calculated",formula:"BMI = weight(kg) ÷ height²(m)   |   Imperial: BMI = 703 × weight(lb) ÷ height²(in)",
        steps:["Convert height to meters: 175cm → 1.75m. Square it: 1.75² = 3.0625.",
          "Divide weight by squared height: 70÷3.0625 = <strong>22.9</strong>.",
          "Compare to WHO categories: &lt;18.5 Underweight · 18.5–24.9 Normal · 25–29.9 Overweight · ≥30 Obese."],
        note:"BMI does not account for muscle mass, age, or ethnicity. Athletes often show high BMI with low body fat."}}
      result={result&&(
        <div>
          <div style={{background:result.cat.bg,border:`2px solid ${result.cat.color}`,borderRadius:14,padding:"20px 24px",marginBottom:16,textAlign:"center"}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:result.cat.color,marginBottom:4}}>Your BMI</p>
            <p style={{fontSize:52,fontWeight:900,color:result.cat.color,lineHeight:1,fontVariantNumeric:"tabular-nums"}}>{result.bmi.toFixed(1)}</p>
            <p style={{fontSize:20,fontWeight:700,color:result.cat.color,marginTop:6}}>{result.cat.label}</p>
          </div>

          <div style={{marginBottom:16,padding:"0 4px"}}><GaugeChart bmi={result.bmi}/></div>

          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}>
            <button type="button" onClick={printPDF} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 18px",background:"#fff",border:"2px solid #E2E8F0",borderRadius:10,cursor:"pointer",fontSize:13,fontWeight:700,color:"#1B3A6B"}}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              Download PDF
            </button>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
            {CATS.map(c=>(
              <div key={c.label} style={{padding:"12px 14px",borderRadius:12,border:`2px solid ${c.label===result.cat.label?c.color:"#E2E8F0"}`,background:c.label===result.cat.label?c.bg:"#fff",transition:"all .2s"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                  <span style={{width:10,height:10,borderRadius:"50%",background:c.color,flexShrink:0}}/>
                  <span style={{fontSize:13,fontWeight:700,color:c.color}}>{c.label}</span>
                </div>
                <p style={{fontSize:11,color:"#94A3B8"}}>{c.label==="Underweight"?"BMI < 18.5":c.label==="Normal"?"18.5 – 24.9":c.label==="Overweight"?"25.0 – 29.9":"≥ 30.0"}</p>
              </div>
            ))}
          </div>

          <div style={{background:"#F8FAFC",borderRadius:12,padding:"14px 16px"}}>
            <p style={{fontSize:12,color:"#64748B",marginBottom:4}}>Healthy weight range for your height:</p>
            <p style={{fontSize:16,fontWeight:800,color:"#10B981",fontVariantNumeric:"tabular-nums"}}>
              {result.minKg.toFixed(1)} – {result.maxKg.toFixed(1)} kg
              ({(result.minKg*2.205).toFixed(0)} – {(result.maxKg*2.205).toFixed(0)} lbs)
            </p>
          </div>
        </div>
      )}>
      {/* Unit toggle */}
      <div style={{display:"flex",background:"#F1F5F9",borderRadius:10,padding:3,width:"fit-content",marginBottom:4}}>
        {(["metric","imperial"] as const).map(u=>(
          <button key={u} type="button" onClick={()=>setUnit(u)} style={{
            padding:"8px 18px",borderRadius:8,border:"none",fontSize:13,fontWeight:700,cursor:"pointer",
            background:unit===u?"#fff":"transparent",color:unit===u?"#1B3A6B":"#64748B",
            boxShadow:unit===u?"0 1px 4px rgba(0,0,0,.1)":"none",transition:"all .15s",
          }}>{u==="metric"?"Metric (kg/cm)":"Imperial (lb/ft)"}</button>
        ))}
      </div>
      {unit==="metric"?(
        <TwoCol>
          <InputField label="Weight (kg)" id="wkg" value={wt} onChange={setWt} min="1" max="500"/>
          <InputField label="Height (cm)" id="hcm" value={ht} onChange={setHt} min="50" max="300"/>
        </TwoCol>
      ):(
        <TwoCol>
          <InputField label="Weight (lbs)" id="wlb" value={lb} onChange={setLb} min="1"/>
          <div>
            <label style={{display:"block",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#64748B",marginBottom:6}}>Height</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <InputField label="" id="hft" value={ft} onChange={setFt} suffix="ft" min="1" max="8"/>
              <InputField label="" id="hin" value={inch} onChange={setInch} suffix="in" min="0" max="11"/>
            </div>
          </div>
        </TwoCol>
      )}
    </CalculatorShell>
  );
}