"use client";
import { type ReactNode } from "react";

/* ── shared styles ── */
const labelStyle: React.CSSProperties = {
  display:"block", fontSize:11, fontWeight:700,
  textTransform:"uppercase", letterSpacing:"0.06em",
  color:"#64748B", marginBottom:6,
};
const inputStyle: React.CSSProperties = {
  width:"100%", border:"2px solid #E2E8F0", borderRadius:10,
  padding:"11px 14px", fontSize:15, color:"#1E293B",
  background:"#fff", outline:"none", transition:"border-color .15s, box-shadow .15s",
  WebkitAppearance:"none", appearance:"none",
};

interface HowItWorks {
  title?: string;
  formula?: string;
  formulaLabel?: string;
  steps: string[];
  note?: string;
}
interface Props {
  onCalculate: () => void;
  buttonLabel?: string;
  result?: ReactNode;
  children: ReactNode;
  howItWorks?: HowItWorks;
}

export default function CalculatorShell({ onCalculate, buttonLabel="Calculate", result, children, howItWorks }: Props) {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>

      {/* Input card */}
      <div style={{background:"#fff",borderRadius:16,border:"2px solid #E2E8F0",padding:"24px 20px",boxShadow:"0 1px 6px rgba(0,0,0,.05)"}}>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>{children}</div>
        <button type="button" onClick={onCalculate} style={{
          marginTop:22, width:"100%", background:"#F97316", color:"#fff",
          fontWeight:800, fontSize:15, padding:"14px 0", borderRadius:12,
          border:"none", cursor:"pointer", letterSpacing:"0.02em",
          boxShadow:"0 4px 14px rgba(249,115,22,.4)", transition:"all .15s",
        }}
          onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="#EA6A0A"}
          onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="#F97316"}
          onMouseDown={e=>(e.currentTarget as HTMLElement).style.transform="scale(.98)"}
          onMouseUp={e=>(e.currentTarget as HTMLElement).style.transform="scale(1)"}>
          {buttonLabel}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="result-animate" style={{background:"#fff",borderRadius:16,border:"2px solid #E2E8F0",padding:"24px 20px",boxShadow:"0 1px 6px rgba(0,0,0,.05)"}}>
          {result}
        </div>
      )}

      {/* How it works */}
      {howItWorks && (
        <div style={{background:"#fff",borderRadius:16,border:"2px solid #E2E8F0",padding:"24px 20px",boxShadow:"0 1px 6px rgba(0,0,0,.05)"}}>
          {/* HowTo schema for rich results */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": howItWorks.title ?? "How This Calculator Works",
            "step": howItWorks.steps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "text": s.replace(/<[^>]+>/g, ""),
            })),
          })}} />
          <h2 style={{fontSize:16,fontWeight:800,color:"#1E293B",marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
            <span style={{color:"#F97316"}}>📐</span>
            {howItWorks.title ?? "How This Calculator Works"}
          </h2>
          {howItWorks.formula && (
            <div style={{marginBottom:14}}>
              {howItWorks.formulaLabel && <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#94A3B8",marginBottom:6}}>{howItWorks.formulaLabel}</p>}
              <div style={{background:"#F8FAFC",border:"1.5px solid #E2E8F0",borderRadius:10,padding:"12px 16px",fontFamily:"'JetBrains Mono',monospace",fontSize:13,color:"#1B3A6B",overflowX:"auto"}}>
                {howItWorks.formula}
              </div>
            </div>
          )}
          <ol style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10,margin:0,padding:0}}>
            {howItWorks.steps.map((step,i)=>(
              <li key={i} style={{display:"flex",gap:12,fontSize:14,color:"#475569",lineHeight:1.7}}>
                <span style={{flexShrink:0,width:24,height:24,borderRadius:"50%",background:"rgba(27,58,107,.1)",color:"#1B3A6B",fontSize:12,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1}}>{i+1}</span>
                <span dangerouslySetInnerHTML={{__html:step}}/>
              </li>
            ))}
          </ol>
          {howItWorks.note && <p style={{marginTop:14,fontSize:12,color:"#94A3B8",borderTop:"1px solid #F1F5F9",paddingTop:12,lineHeight:1.7}}>* {howItWorks.note}</p>}
        </div>
      )}
    </div>
  );
}

/* ── Input helpers ── */
export function InputField({ label, id, value, onChange, prefix, suffix, step, min, max, type="number" }:{
  label:string; id:string; value:string; onChange:(v:string)=>void;
  prefix?:string; suffix?:string; step?:string; min?:string; max?:string; type?:string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <div style={{position:"relative",display:"flex",alignItems:"center"}}>
        {prefix && <span style={{position:"absolute",left:14,color:"#64748B",fontSize:14,fontWeight:600,pointerEvents:"none"}}>{prefix}</span>}
        <input type={type} id={id} value={value} step={step} min={min} max={max}
          inputMode={type==="number"?(step?.includes(".")?("decimal" as const):("numeric" as const)):undefined}
          onChange={e=>onChange(e.target.value)}
          style={{...inputStyle, paddingLeft:prefix?34:14, paddingRight:suffix?50:14}}
          onFocus={e=>{e.target.style.borderColor="#F97316";e.target.style.boxShadow="0 0 0 3px rgba(249,115,22,.15)";}}
          onBlur={e=>{e.target.style.borderColor="#E2E8F0";e.target.style.boxShadow="none";}}
        />
        {suffix && <span style={{position:"absolute",right:14,color:"#94A3B8",fontSize:12,fontWeight:600,pointerEvents:"none"}}>{suffix}</span>}
      </div>
    </div>
  );
}

export function SelectField({ label, id, value, onChange, options }:{
  label:string; id:string; value:string; onChange:(v:string)=>void; options:[string,string][];
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <select id={id} value={value} onChange={e=>onChange(e.target.value)}
        style={{...inputStyle,cursor:"pointer",paddingRight:36,
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill='%2394A3B8' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E")`,
          backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center"}}
        onFocus={e=>{e.target.style.borderColor="#F97316";e.target.style.boxShadow="0 0 0 3px rgba(249,115,22,.15)";}}
        onBlur={e=>{e.target.style.borderColor="#E2E8F0";e.target.style.boxShadow="none";}}>
        {options.map(([v,l])=><option key={v} value={v}>{l}</option>)}
      </select>
    </div>
  );
}

export function TwoCol({children}:{children:ReactNode}) {
  return (
    <div className="two-col-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      {children}
    </div>
  );
}

export function ResultHeader({label,value,sub}:{label:string;value:string;sub?:string}) {
  return (
    <div style={{textAlign:"center",paddingBottom:20,marginBottom:20,borderBottom:"2px solid #F1F5F9"}}>
      <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#94A3B8",marginBottom:4}}>{label}</p>
      <p style={{fontSize:40,fontWeight:900,color:"#1B3A6B",fontVariantNumeric:"tabular-nums",lineHeight:1.1}}>{value}</p>
      {sub && <p style={{fontSize:13,color:"#64748B",marginTop:6}}>{sub}</p>}
    </div>
  );
}

export function ResultRow({label,value,accent,large}:{label:string;value:string;accent?:boolean;large?:boolean}) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid #F8FAFC"}}>
      <span style={{fontSize:14,color:"#64748B"}}>{label}</span>
      <span style={{fontSize:large?18:14,fontWeight:700,color:accent?"#F97316":"#1E293B",fontVariantNumeric:"tabular-nums"}}>{value}</span>
    </div>
  );
}
