"use client";
import { useState } from "react";
import { InputField, SelectField } from "./CalculatorShell";

const CIDR_OPTIONS:[string,string][]=[
  ["8","/8 — 255.0.0.0"],["16","/16 — 255.255.0.0"],["24","/24 — 255.255.255.0"],
  ["25","/25 — 255.255.255.128"],["26","/26 — 255.255.255.192"],
  ["27","/27 — 255.255.255.224"],["28","/28 — 255.255.255.240"],
  ["29","/29 — 255.255.255.248"],["30","/30 — 255.255.255.252"],
];

function intToIP(n:number){return[(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");}

export default function SubnetCalculator() {
  const [ip,setIp]=useState("192.168.1.0"); const [cidr,setCidr]=useState("24");
  const [result,setResult]=useState<any>(null);

  const howItWorks = {
    title: "How IP Subnetting Works",
    formulaLabel: "CIDR — Usable Hosts Formula",
    formula: "Usable hosts = 2^(32 − prefix) − 2",
    steps: [
      "An IP address is 32 bits. The CIDR prefix (e.g. /24) defines how many bits are the <strong>network</strong> portion.",
      "Remaining bits define hosts. /24 = 8 host bits = 256 addresses − 2 (network + broadcast) = <strong>254 usable hosts</strong>.",
      "Subnet mask = prefix bits set to 1, rest 0. /24 → 255.255.255.0.",
      "Network address = IP AND subnet mask. Broadcast = network OR wildcard mask.",
    ],
    note: "/31 and /32 are special cases for point-to-point links — they have no broadcast address.",
  };

  function calculate(){
    const parts=ip.split(".").map(Number);
    if(parts.length!==4||parts.some(p=>isNaN(p)||p<0||p>255)){alert("Invalid IP");return;}
    const ipInt=(parts[0]<<24|parts[1]<<16|parts[2]<<8|parts[3])>>>0;
    const c=parseInt(cidr), maskInt=(c===0?0:(~0<<(32-c)))>>>0;
    const netInt=(ipInt&maskInt)>>>0, bcastInt=(netInt|~maskInt)>>>0;
    const hosts=c>=32?1:c===31?2:Math.pow(2,32-c)-2;
    setResult({
      ip, network:intToIP(netInt), mask:intToIP(maskInt),
      wildcard:intToIP((~maskInt)>>>0), cidr:`/${c}`,
      broadcast:intToIP(bcastInt),
      first:c>=31?intToIP(netInt):intToIP(netInt+1),
      last:c>=31?intToIP(bcastInt):intToIP(bcastInt-1),
      hosts:hosts.toLocaleString(),
      ipClass:c<=8?"A":c<=16?"B":c<=24?"C":"D/E",
    });
  }

  const ROWS=[["IP Address","ip"],["Network Address","network"],["Subnet Mask","mask"],["Wildcard Mask","wildcard"],["CIDR","cidr"],["Broadcast","broadcast"],["First Host","first"],["Last Host","last"],["Usable Hosts","hosts"],["IP Class","ipClass"]];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 space-y-4">
        <InputField label="IP Address" id="subip" type="text" value={ip} onChange={setIp} />
        <SelectField label="Subnet Mask / CIDR" id="subcidr" value={cidr} onChange={setCidr} options={CIDR_OPTIONS} />
        <button type="button" onClick={calculate}
          className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 rounded-xl transition-colors">Calculate Subnet</button>
      </div>
      {result&&(
        <div className="result-animate bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-surface-border">
              {ROWS.map(([label,key])=>(
                <tr key={key} className="hover:bg-surface-muted/50">
                  <td className="px-5 py-3 font-semibold text-ink-muted w-1/2">{label}</td>
                  <td className="px-5 py-3 font-mono font-bold text-brand-blue">{(result as any)[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}