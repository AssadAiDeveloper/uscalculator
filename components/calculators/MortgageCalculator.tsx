"use client";
import { useState } from "react";
import CalculatorShell, { InputField, SelectField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

interface AmortRow { year:number; principal:number; interest:number; balance:number; }
interface Result {
  monthlyTotal:number; pi:number; tax:number; ins:number;
  totalPayments:number; totalInterest:number; loan:number;
  amort:AmortRow[];
}

/* ── Inline SVG bar chart ── */
function BarChart({ amort, loan }: { amort:AmortRow[]; loan:number }) {
  const W=560, H=200, PL=50, PB=28, PR=10, PT=10;
  const iW=W-PL-PR, iH=H-PB-PT;
  const max=loan;
  const n=amort.length;
  const xOf=(i:number)=>PL+(i/(n-1))*iW;
  const yOf=(v:number)=>PT+iH-(Math.min(v,max)/max)*iH;
  const balPts=amort.map((d,i)=>`${xOf(i).toFixed(1)},${yOf(d.balance).toFixed(1)}`).join(" ");
  const yTicks=[0,.25,.5,.75,1];
  const fmt=(v:number)=>v>=1e6?`$${(v/1e6).toFixed(1)}M`:`$${(v/1000).toFixed(0)}k`;
  const mid=Math.floor(n/2);
  const midX=xOf(mid), midY=yOf(amort[mid].balance);
  const xTickStep=Math.ceil(n/5);
  const xTicks=amort.filter((_,i)=>i===0||i%xTickStep===0||i===n-1);
  return (
    <div style={{marginTop:8}}>
      <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#94A3B8",marginBottom:8}}>
        Remaining Balance Over Time
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto"}} role="img" aria-label="Mortgage balance chart">
        <defs>
          <linearGradient id="mg-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B3A6B" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#1B3A6B" stopOpacity="0.02"/>
          </linearGradient>
        </defs>
        {yTicks.map(f=>{
          const y=yOf(max*f);
          return <g key={f}>
            <line x1={PL} y1={y} x2={W-PR} y2={y} stroke="#F1F5F9" strokeWidth="1"/>
            <text x={PL-6} y={y+4} textAnchor="end" fontSize="9" fill="#94A3B8">{fmt(max*f)}</text>
          </g>;
        })}
        <polygon points={`${xOf(0)},${yOf(0)} ${balPts} ${xOf(n-1)},${yOf(0)}`} fill="url(#mg-grad)"/>
        <polyline points={balPts} fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {xTicks.map((d)=>{
          const i=amort.indexOf(d);
          return <text key={i} x={xOf(i)} y={H-6} textAnchor="middle" fontSize="9" fill="#94A3B8">Yr {d.year}</text>;
        })}
        <circle cx={midX} cy={midY} r="4" fill="#F97316"/>
        <text x={midX+7} y={midY-4} fontSize="9" fill="#F97316" fontWeight="700">{fmt(amort[mid].balance)}</text>
      </svg>
      <div style={{display:"flex",gap:16,justifyContent:"center",marginTop:4,fontSize:12,color:"#64748B"}}>
        <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{display:"inline-block",width:24,height:3,background:"#1B3A6B",borderRadius:2}}/> Balance</span>
        <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{display:"inline-block",width:10,height:10,borderRadius:"50%",background:"#F97316"}}/> Midpoint</span>
      </div>
    </div>
  );
}

/* ── Donut chart ── */
function DonutChart({ pi, tax, ins }: { pi:number; tax:number; ins:number }) {
  const total=pi+tax+ins;
  const pcts=[pi/total, tax/total, ins/total];
  const colors=["#1B3A6B","#F97316","#10B981"];
  const labels=["P&I","Tax","Insurance"];
  const R=60, CX=80, CY=80;
  let cumAngle=-Math.PI/2;
  const slices=pcts.map((p,i)=>{
    const startAngle=cumAngle;
    const endAngle=cumAngle+p*2*Math.PI;
    cumAngle=endAngle;
    const x1=CX+R*Math.cos(startAngle), y1=CY+R*Math.sin(startAngle);
    const x2=CX+R*Math.cos(endAngle), y2=CY+R*Math.sin(endAngle);
    const large=p>0.5?1:0;
    return { d:`M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`, color:colors[i], label:labels[i], pct:Math.round(p*100) };
  });
  return (
    <div style={{display:"flex",alignItems:"center",gap:20}}>
      <svg viewBox={`0 0 160 160`} style={{width:120,height:120,flexShrink:0}}>
        {slices.map((s,i)=><path key={i} d={s.d} fill={s.color}/>)}
        <circle cx={CX} cy={CY} r={36} fill="#fff"/>
        <text x={CX} y={CY-4} textAnchor="middle" fontSize="10" fill="#1E293B" fontWeight="700">PITI</text>
        <text x={CX} y={CY+10} textAnchor="middle" fontSize="9" fill="#64748B">Breakdown</text>
      </svg>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {slices.map((s,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,fontSize:13}}>
            <span style={{width:12,height:12,borderRadius:3,background:s.color,flexShrink:0}}/>
            <span style={{color:"#64748B"}}>{s.label}</span>
            <span style={{fontWeight:700,color:"#1E293B",marginLeft:"auto",paddingLeft:8}}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MortgageCalculator() {
  const [homePrice,   setHomePrice]   = useState("350000");
  const [downPayment, setDownPayment] = useState("70000");
  const [loanTerm,    setLoanTerm]    = useState("30");
  const [rate,        setRate]        = useState("6.5");
  const [propTax,     setPropTax]     = useState("4200");
  const [insurance,   setInsurance]   = useState("1200");
  const [showAmort,   setShowAmort]   = useState(false);
  const [result,      setResult]      = useState<Result|null>(null);

  function calculate() {
    const price = parseFloat(homePrice)||0;
    const down  = parseFloat(downPayment)||0;
    const term  = parseInt(loanTerm)||30;
    const r     = parseFloat(rate)/100/12;
    const tax   = parseFloat(propTax)/12;
    const ins   = parseFloat(insurance)/12;
    const n     = term*12;
    const P     = Math.max(0, price-down);
    if(P<=0){alert("Down payment cannot exceed home price.");return;}
    const pi = r===0 ? P/n : P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    let bal=P; const amort:AmortRow[]=[];
    for(let y=1;y<=term;y++){
      let yP=0,yI=0;
      for(let m=0;m<12;m++){
        const iP=bal*r, pP=Math.min(pi-iP,bal);
        yI+=iP; yP+=pP; bal=Math.max(0,bal-pP);
      }
      amort.push({year:y,principal:yP,interest:yI,balance:bal});
      if(bal<=0.01)break;
    }
    setResult({monthlyTotal:pi+tax+ins,pi,tax,ins,totalPayments:pi*n,totalInterest:pi*n-P,loan:P,amort});
    setShowAmort(false);
  }

  function printPDF() {
    if(!result) return;
    const date=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
    const html=`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>Mortgage Calculator — USCalculator.net</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:#1E293B;padding:32px 40px;max-width:680px;margin:0 auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1B3A6B;padding-bottom:14px;margin-bottom:20px}
.brand{font-size:20px;font-weight:900;color:#1B3A6B}.brand span{color:#F97316}
.meta{text-align:right;font-size:10px;color:#64748B;line-height:1.8}
.title{font-size:22px;font-weight:900;color:#1B3A6B;margin-bottom:20px}
.section{margin-bottom:20px}
.section-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#94A3B8;margin-bottom:6px}
table{width:100%;border-collapse:collapse;border-radius:10px;overflow:hidden}
tr{border-bottom:1px solid #F1F5F9}tr:last-child{border-bottom:none}
td{padding:9px 12px}td.lbl{color:#64748B;width:55%;font-size:11px}td.val{font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
.results{background:#EFF6FF;border:2px solid #1B3A6B;border-radius:10px;padding:16px;margin-bottom:20px}
.big{font-size:26px;font-weight:900;color:#1B3A6B}.accent{color:#F97316;font-size:16px}
.note{font-size:9px;color:#94A3B8;margin-top:20px;border-top:1px solid #E2E8F0;padding-top:12px;line-height:1.7}
.footer{margin-top:24px;border-top:1px solid #E2E8F0;padding-top:12px;display:flex;justify-content:space-between;font-size:9px;color:#94A3B8}
@media print{@page{margin:20mm 15mm;size:A4}}
</style></head><body>
<div class="header"><div><div class="brand">US<span>Calculator</span>.net</div><div style="font-size:10px;color:#94A3B8;margin-top:2px">Free Online Calculators</div></div>
<div class="meta"><div>${date}</div><div>uscalculator.net</div></div></div>
<div class="title">🏠 Mortgage Calculator</div>
<div class="section"><div class="section-label">Your Inputs</div>
<table><tbody>
<tr><td class="lbl">Home Price</td><td class="val">$${parseFloat(homePrice).toLocaleString()}</td></tr>
<tr><td class="lbl">Down Payment</td><td class="val">$${parseFloat(downPayment).toLocaleString()}</td></tr>
<tr><td class="lbl">Loan Amount</td><td class="val">$${result.loan.toLocaleString("en-US",{maximumFractionDigits:0})}</td></tr>
<tr><td class="lbl">Loan Term</td><td class="val">${loanTerm} years</td></tr>
<tr><td class="lbl">Interest Rate</td><td class="val">${rate}%</td></tr>
<tr><td class="lbl">Property Tax</td><td class="val">$${parseFloat(propTax).toLocaleString()}/yr</td></tr>
<tr><td class="lbl">Home Insurance</td><td class="val">$${parseFloat(insurance).toLocaleString()}/yr</td></tr>
</tbody></table></div>
<div class="section"><div class="section-label">Results</div>
<div class="results">
<table><tbody>
<tr style="border-bottom:2px solid #BFDBFE"><td class="lbl" style="font-weight:700;font-size:12px">Monthly Payment (PITI)</td><td class="val big">$${result.monthlyTotal.toFixed(2)}</td></tr>
<tr><td class="lbl">Principal & Interest</td><td class="val">$${result.pi.toFixed(2)}/mo</td></tr>
<tr><td class="lbl">Property Tax</td><td class="val">$${result.tax.toFixed(2)}/mo</td></tr>
<tr><td class="lbl">Home Insurance</td><td class="val">$${result.ins.toFixed(2)}/mo</td></tr>
<tr><td class="lbl">Total Interest Paid</td><td class="val accent">$${result.totalInterest.toLocaleString("en-US",{maximumFractionDigits:0})}</td></tr>
<tr><td class="lbl">Total Cost of Loan</td><td class="val">$${(result.totalPayments+parseFloat(downPayment)).toLocaleString("en-US",{maximumFractionDigits:0})}</td></tr>
</tbody></table></div></div>
<div class="note">* Results are estimates only. Actual payment may vary based on credit score, PMI, HOA fees, and lender terms. This is not financial advice — consult a qualified mortgage professional.</div>
<div class="footer"><span>Generated by USCalculator.net — Free Online Calculators</span><span>Not financial advice</span></div>
</body></html>`;
    const w=window.open("","_blank","width=800,height=700");
    if(!w)return;
    w.document.write(html);
    w.document.close();
    w.onload=()=>{w.focus();w.print();};
  }

  const c3=(n:number)=>n.toLocaleString("en-US",{maximumFractionDigits:0});
  const c2=(n:number)=>`$${n.toFixed(2)}`;

  return (
    <CalculatorShell onCalculate={calculate} buttonLabel="📊 Calculate Payment"
      howItWorks={{
        title:"How Mortgage Payments Are Calculated",
        formulaLabel:"Monthly Payment Formula",
        formula:"M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]",
        steps:[
          "<strong>P</strong> = Loan amount (home price − down payment).",
          "<strong>r</strong> = Monthly rate = annual rate ÷ 12. E.g. 6.5% → 0.065÷12 = 0.00542.",
          "<strong>n</strong> = Total payments = years × 12. A 30yr loan = 360 payments.",
          "Property tax & insurance are added on top: <strong>PITI = P&I + Tax + Insurance</strong>.",
          "Each payment is the same amount but the split shifts — early payments are mostly interest, later ones mostly principal.",
        ],
        note:"PMI (Private Mortgage Insurance) is required if down payment is below 20% — add $50–$250/mo for loans with <20% down."
      }}
      result={result && (
        <div>
          {/* Header */}
          <div style={{background:"linear-gradient(135deg,#1B3A6B,#2553A0)",borderRadius:12,padding:"20px 22px",color:"#fff",marginBottom:20}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",opacity:.7,marginBottom:6}}>Monthly Payment (PITI)</p>
            <p style={{fontSize:42,fontWeight:900,lineHeight:1,fontVariantNumeric:"tabular-nums"}}>${result.monthlyTotal.toFixed(2)}</p>
            <p style={{fontSize:13,opacity:.6,marginTop:6}}>Over {loanTerm} years: ${c3(result.monthlyTotal*parseInt(loanTerm)*12)} total</p>
          </div>

          {/* PDF button */}
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:16}}>
            <button type="button" onClick={printPDF} style={{
              display:"flex",alignItems:"center",gap:8,padding:"9px 18px",
              background:"#fff",border:"2px solid #E2E8F0",borderRadius:10,
              cursor:"pointer",fontSize:13,fontWeight:700,color:"#1B3A6B",
              transition:"all .15s",
            }}
              onMouseEnter={e=>{const el=e.currentTarget;el.style.background="#EFF6FF";el.style.borderColor="#1B3A6B";}}
              onMouseLeave={e=>{const el=e.currentTarget;el.style.background="#fff";el.style.borderColor="#E2E8F0";}}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
              Download PDF
            </button>
          </div>

          {/* Donut + breakdown */}
          <div style={{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center",marginBottom:20}}>
            <DonutChart pi={result.pi} tax={result.tax} ins={result.ins}/>
            <div style={{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:6}}>
              {[
                {label:"Principal & Interest", value:c2(result.pi)+"/mo", color:"#1B3A6B"},
                {label:"Property Tax",         value:c2(result.tax)+"/mo",color:"#F97316"},
                {label:"Insurance",            value:c2(result.ins)+"/mo",color:"#10B981"},
              ].map(r=>(
                <div key={r.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",background:"#F8FAFC",borderRadius:10,marginBottom:4}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{width:10,height:10,borderRadius:"50%",background:r.color,flexShrink:0}}/>
                    <span style={{fontSize:13,color:"#64748B"}}>{r.label}</span>
                  </div>
                  <span style={{fontSize:14,fontWeight:700,color:"#1E293B",fontVariantNumeric:"tabular-nums"}}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:16}}>
            {[
              {label:"Loan Amount",    value:`$${c3(result.loan)}`,           accent:false},
              {label:"Total Interest", value:`$${c3(result.totalInterest)}`,  accent:true},
              {label:"Total Payments", value:`$${c3(result.totalPayments)}`,  accent:false},
              {label:"Interest Rate",  value:`${rate}% annual`,               accent:false},
            ].map(s=>(
              <div key={s.label} style={{padding:"14px 16px",background:"#F8FAFC",borderRadius:12,border:"1.5px solid #E2E8F0"}}>
                <p style={{fontSize:11,color:"#94A3B8",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4}}>{s.label}</p>
                <p style={{fontSize:18,fontWeight:900,color:s.accent?"#F97316":"#1B3A6B",fontVariantNumeric:"tabular-nums"}}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div style={{border:"1.5px solid #E2E8F0",borderRadius:12,padding:"16px"}}>
            <BarChart amort={result.amort} loan={result.loan}/>
          </div>

          {/* Amortization toggle */}
          <button type="button" onClick={()=>setShowAmort(v=>!v)}
            style={{marginTop:12,width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 16px",background:"#F8FAFC",border:"1.5px solid #E2E8F0",borderRadius:12,cursor:"pointer",fontSize:14,fontWeight:700,color:"#1E293B",transition:"background .15s"}}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="#EFF6FF"}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="#F8FAFC"}>
            <span>📋 Full Amortization Schedule</span>
            <svg style={{width:16,height:16,color:"#94A3B8",transition:"transform .2s",transform:showAmort?"rotate(180deg)":"none"}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
          </button>

          {showAmort && (
            <div style={{marginTop:8,borderRadius:12,border:"1.5px solid #E2E8F0",overflow:"hidden",overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:400}}>
                <thead>
                  <tr style={{background:"#1B3A6B",color:"#fff"}}>
                    {["Year","Principal","Interest","Balance"].map(h=>(
                      <th key={h} style={{padding:"10px 14px",textAlign:h==="Year"?"left" as const:"right" as const,fontWeight:700,fontSize:11,textTransform:"uppercase" as const,letterSpacing:"0.05em"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.amort.map((r,i)=>(
                    <tr key={r.year} style={{background:i%2===0?"#fff":"#F8FAFC",borderBottom:"1px solid #F1F5F9"}}>
                      <td style={{padding:"9px 14px",fontWeight:700,color:"#1E293B"}}>Year {r.year}</td>
                      <td style={{padding:"9px 14px",textAlign:"right",color:"#10B981",fontVariantNumeric:"tabular-nums"}}>${c3(r.principal)}</td>
                      <td style={{padding:"9px 14px",textAlign:"right",color:"#EF4444",fontVariantNumeric:"tabular-nums"}}>${c3(r.interest)}</td>
                      <td style={{padding:"9px 14px",textAlign:"right",color:"#64748B",fontVariantNumeric:"tabular-nums"}}>${c3(r.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}>
      <TwoCol>
        <InputField label="Home Price" id="hp" prefix="$" value={homePrice} onChange={setHomePrice}/>
        <InputField label="Down Payment" id="dp" prefix="$" value={downPayment} onChange={setDownPayment}/>
      </TwoCol>
      <TwoCol>
        <SelectField label="Loan Term" id="lt" value={loanTerm} onChange={setLoanTerm}
          options={[["30","30 years"],["20","20 years"],["15","15 years"],["10","10 years"]]}/>
        <InputField label="Interest Rate" id="ir" suffix="%" value={rate} onChange={setRate} step="0.01"/>
      </TwoCol>
      <TwoCol>
        <InputField label="Property Tax ($/yr)" id="pt" prefix="$" value={propTax} onChange={setPropTax}/>
        <InputField label="Home Insurance ($/yr)" id="hi" prefix="$" value={insurance} onChange={setInsurance}/>
      </TwoCol>
    </CalculatorShell>
  );
}
