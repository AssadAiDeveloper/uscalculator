"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

function LineChart({data}:{data:{month:number;principal:number;interest:number}[]}){
  const W=560,H=160,PL=46,PB=24,PR=8,PT=8;
  const iW=W-PL-PR, iH=H-PB-PT, n=data.length;
  const maxY=Math.max(...data.map(d=>d.principal+d.interest));
  const xOf=(i:number)=>PL+(i/(n-1))*iW;
  const yOf=(v:number)=>PT+iH-(v/maxY)*iH;
  const princPts=data.map((d,i)=>`${xOf(i).toFixed(1)},${yOf(d.principal).toFixed(1)}`).join(" ");
  const intPts=data.map((d,i)=>`${xOf(i).toFixed(1)},${yOf(d.interest).toFixed(1)}`).join(" ");
  const fmt=(v:number)=>`$${(v).toFixed(0)}`;
  const step=Math.ceil(n/5);
  return(
    <div style={{marginTop:8}}>
      <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#94A3B8",marginBottom:8}}>Principal vs Interest Per Payment</p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto"}}>
        {[0,.5,1].map(f=>{const y=yOf(maxY*f);return<g key={f}><line x1={PL} y1={y} x2={W-PR} y2={y} stroke="#F1F5F9" strokeWidth="1"/><text x={PL-4} y={y+4} textAnchor="end" fontSize="9" fill="#94A3B8">{fmt(maxY*f)}</text></g>;})}
        <polyline points={princPts} fill="none" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round"/>
        <polyline points={intPts} fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
        {data.filter((_,i)=>i%step===0||i===n-1).map(d=><text key={d.month} x={xOf(data.indexOf(d))} y={H-4} textAnchor="middle" fontSize="9" fill="#94A3B8">Mo {d.month}</text>)}
      </svg>
      <div style={{display:"flex",gap:16,justifyContent:"center",marginTop:4,fontSize:12,color:"#64748B"}}>
        <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{display:"inline-block",width:20,height:3,background:"#1B3A6B",borderRadius:2}}/>Principal</span>
        <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{display:"inline-block",width:20,height:3,background:"#F97316",borderRadius:2}}/>Interest</span>
      </div>
    </div>
  );
}

export default function LoanCalculator(){
  const [amount,setAmount]=useState("20000");
  const [rate,setRate]=useState("6.5");
  const [term,setTerm]=useState("60");
  const [result,setResult]=useState<{pmt:number;total:number;interest:number;data:{month:number;principal:number;interest:number}[]}|null>(null);

  function calculate(){
    const P=parseFloat(amount)||0;
    const r=parseFloat(rate)/100/12;
    const n=parseInt(term)||1;
    if(P<=0||n<=0){alert("Please enter valid values.");return;}
    const pmt=r===0?P/n:P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    let bal=P;
    const data=[];
    for(let m=1;m<=n;m++){
      const iP=bal*r, pP=Math.min(pmt-iP,bal);
      bal=Math.max(0,bal-pP);
      if(m<=60) data.push({month:m,principal:parseFloat(pP.toFixed(2)),interest:parseFloat(iP.toFixed(2))});
    }
    setResult({pmt,total:pmt*n,interest:pmt*n-P,data});
  }

  function printPDF(){
    if(!result)return;
    const date=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
    const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Loan Calculator</title>
<style>body{font-family:Arial,sans-serif;padding:32px 40px;max-width:600px;margin:0 auto;color:#1E293B;font-size:13px}
.brand{font-size:20px;font-weight:900;color:#1B3A6B}.brand span{color:#F97316}
hr{border:none;border-top:3px solid #1B3A6B;margin:10px 0 20px}
table{width:100%;border-collapse:collapse}td{padding:9px 12px;border-bottom:1px solid #F1F5F9}
td:last-child{font-weight:700;text-align:right}.big{font-size:32px;font-weight:900;color:#1B3A6B}
.acc{color:#F97316;font-size:18px;font-weight:700}.note{font-size:10px;color:#94A3B8;margin-top:20px;border-top:1px solid #E2E8F0;padding-top:12px}
@media print{@page{margin:20mm;size:A4}}</style></head><body>
<div class="brand">US<span>Calculator</span>.net</div>
<div style="font-size:11px;color:#94A3B8">${date}</div><hr>
<div style="font-size:22px;font-weight:900">💳 Loan Calculator Results</div>
<div class="big" style="margin:12px 0">$${result.pmt.toFixed(2)}<span style="font-size:14px;color:#64748B">/month</span></div>
<table><tr><td>Loan Amount</td><td>$${parseFloat(amount).toLocaleString()}</td></tr>
<tr><td>Annual Interest Rate</td><td>${rate}%</td></tr>
<tr><td>Loan Term</td><td>${term} months</td></tr>
<tr><td>Monthly Payment</td><td>$${result.pmt.toFixed(2)}</td></tr>
<tr><td>Total Amount Paid</td><td>$${result.total.toFixed(2)}</td></tr>
<tr><td>Total Interest</td><td class="acc" style="text-align:right">$${result.interest.toFixed(2)}</td></tr>
</table>
<div class="note">* Results are estimates. Actual payments may differ based on lender fees, prepayment terms, and your credit profile. Not financial advice.</div>
</body></html>`;
    const w=window.open("","_blank","width=700,height=600");
    if(!w)return; w.document.write(html); w.document.close(); w.onload=()=>{w.focus();w.print();};
  }

  const c=(n:number)=>n.toLocaleString("en-US",{maximumFractionDigits:2});
  return(
    <CalculatorShell onCalculate={calculate} buttonLabel="💳 Calculate Payment"
      howItWorks={{title:"How Loan Payments Are Calculated",formula:"M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]",
        steps:["<strong>P</strong> = Principal (amount borrowed).",
          "<strong>r</strong> = Monthly rate = annual rate ÷ 12. E.g. 6.5% → 0.00542/mo.",
          "<strong>n</strong> = Term in months. 5-year loan = 60 payments.",
          "Total interest = (monthly payment × n) − principal."]}}
      result={result&&(
        <div>
          <div style={{background:"linear-gradient(135deg,#1B3A6B,#2553A0)",borderRadius:12,padding:"20px 22px",color:"#fff",marginBottom:16}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:6}}>Monthly Payment</p>
            <p style={{fontSize:44,fontWeight:900,lineHeight:1,fontVariantNumeric:"tabular-nums"}}>${result.pmt.toFixed(2)}</p>
            <p style={{fontSize:13,opacity:.6,marginTop:6}}>{term} months · ${parseFloat(amount).toLocaleString()} loan</p>
          </div>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:12}}>
            <button type="button" onClick={printPDF} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 18px",background:"#fff",border:"2px solid #E2E8F0",borderRadius:10,cursor:"pointer",fontSize:13,fontWeight:700,color:"#1B3A6B"}}>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              Download PDF
            </button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
            {[{l:"Loan Amount",v:`$${c(parseFloat(amount))}`,a:false},{l:"Total Paid",v:`$${c(result.total)}`,a:false},{l:"Total Interest",v:`$${c(result.interest)}`,a:true}].map(s=>(
              <div key={s.l} style={{padding:"12px 14px",background:"#F8FAFC",borderRadius:12,border:"1.5px solid #E2E8F0"}}>
                <p style={{fontSize:10,color:"#94A3B8",fontWeight:700,textTransform:"uppercase",marginBottom:4}}>{s.l}</p>
                <p style={{fontSize:16,fontWeight:900,color:s.a?"#F97316":"#1B3A6B",fontVariantNumeric:"tabular-nums"}}>{s.v}</p>
              </div>
            ))}
          </div>
          <div style={{border:"1.5px solid #E2E8F0",borderRadius:12,padding:14}}><LineChart data={result.data}/></div>
        </div>
      )}>
      <TwoCol>
        <InputField label="Loan Amount" id="la" prefix="$" value={amount} onChange={setAmount}/>
        <InputField label="Annual Interest Rate" id="lr" suffix="%" value={rate} onChange={setRate} step="0.01"/>
      </TwoCol>
      <InputField label="Loan Term (months)" id="lt" value={term} onChange={setTerm}/>
    </CalculatorShell>
  );
}