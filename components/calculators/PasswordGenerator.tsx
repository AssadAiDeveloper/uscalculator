"use client";
import { useState } from "react";
import { InputField } from "./CalculatorShell";

export default function PasswordGenerator() {
  const [len,setLen]=useState("16");
  const [opts,setOpts]=useState({upper:true,lower:true,num:true,sym:false});
  const [pw,setPw]=useState<string|null>(null);
  const [copied,setCopied]=useState(false);

  function generate(){
    let chars="";
    if(opts.upper)chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(opts.lower)chars+="abcdefghijklmnopqrstuvwxyz";
    if(opts.num)chars+="0123456789";
    if(opts.sym)chars+="!@#$%^&*()-_=+[]{}|;:,.<>?";
    if(!chars){alert("Select at least one character type.");return;}
    let p="";
    for(let i=0;i<(parseInt(len)||16);i++)p+=chars[Math.floor(Math.random()*chars.length)];
    setPw(p); setCopied(false);
  }

  function copy(){if(!pw)return;navigator.clipboard.writeText(pw).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});}

  const strength=pw?(pw.length>=16&&/[A-Z]/.test(pw)&&/[0-9]/.test(pw)&&/[^a-zA-Z0-9]/.test(pw)?"Strong":pw.length>=12?"Medium":"Weak"):"";
  const strengthColors: Record<string,string>={"Strong":"text-emerald-600","Medium":"text-amber-600","Weak":"text-red-600"};
  const strengthColor=strength ? (strengthColors[strength] ?? "") : "";

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 space-y-5">
      <InputField label="Password Length" id="pwlen" value={len} onChange={setLen} min="4" max="128" />
      <div className="space-y-2.5">
        <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide">Character Types</p>
        {([["upper","Uppercase (A-Z)"],["lower","Lowercase (a-z)"],["num","Numbers (0-9)"],["sym","Symbols (!@#$%)"]] as const).map(([k,label])=>(
          <label key={k} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={opts[k]} onChange={e=>setOpts(o=>({...o,[k]:e.target.checked}))}
              className="w-4 h-4 accent-brand-orange cursor-pointer" />
            <span className="text-sm text-ink">{label}</span>
          </label>
        ))}
      </div>
      <button type="button" onClick={generate}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 rounded-xl transition-colors">
        🎲 Generate Password
      </button>
      {pw&&(
        <div className="space-y-3">
          <div className="bg-surface-muted rounded-xl p-4 flex items-center justify-between gap-3">
            <code className="font-mono text-sm text-ink break-all flex-1">{pw}</code>
            <button type="button" onClick={copy}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${copied?"bg-emerald-100 text-emerald-700":"bg-brand-blue text-white hover:bg-brand-blue-mid"}`}>
              {copied?"✓ Copied":"Copy"}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-surface-muted rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all ${strength==="Strong"?"bg-emerald-500 w-full":strength==="Medium"?"bg-amber-500 w-2/3":"bg-red-500 w-1/3"}`} />
            </div>
            <span className={`text-xs font-bold ${strengthColor}`}>{strength}</span>
          </div>
        </div>
      )}
    </div>
  );
}