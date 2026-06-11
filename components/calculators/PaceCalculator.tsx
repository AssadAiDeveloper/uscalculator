"use client";
import { useState } from "react";
import CalculatorShell, { InputField, ResultHeader, ResultRow, TwoCol } from "./CalculatorShell";

export default function PaceCalculator() {
  const [dist,setD]=useState("10"); const [time,setT]=useState("0:45:00");
  const [result,setResult]=useState<any>(null);

  function calculate() {
    const d=parseFloat(dist)||1;
    const parts=time.split(":"), totalSec=parseInt(parts[0]||"0")*3600+parseInt(parts[1]||"0")*60+parseInt(parts[2]||"0");
    const paceSecKm=totalSec/d, speed=d/(totalSec/3600);
    const pm=Math.floor(paceSecKm/60), ps=Math.round(paceSecKm%60);
    const milePace=paceSecKm*1.60934, mpm=Math.floor(milePace/60), mps=Math.round(milePace%60);
    setResult({ pace:`${pm}:${String(ps).padStart(2,"0")}`, milePace:`${mpm}:${String(mps).padStart(2,"0")}`, speed:speed.toFixed(2) });
  }

  return (
    <CalculatorShell onCalculate={calculate}
      howItWorks={{
        title: "How Running Pace Is Calculated",
        steps: [
          "<strong>Pace</strong> = time ÷ distance. A 45-minute 10K = 4.5 min/km (4:30/km).",
          "<strong>Speed</strong> = distance ÷ time in hours. A 45-min 10K = 10 ÷ 0.75 = 13.33 km/h.",
          "To convert km pace to mile pace, multiply by 1.60934 (since 1 mile = 1.60934 km).",
          "Race finish time = distance × pace. A half marathon (21.097 km) at 5:00/km = 1h 45m 29s.",
        ],
      }} buttonLabel="Calculate Pace"
      result={result && <>
        <ResultHeader label="Pace" value={`${result.pace} /km`} />
        <ResultRow label="Pace per Mile" value={`${result.milePace} /mile`} />
        <ResultRow label="Average Speed" value={`${result.speed} km/h`} accent />
      </>}
    >
      <TwoCol>
        <InputField label="Distance (km)"   id="pd" value={dist} onChange={setD} step="0.1" />
        <InputField label="Time (hh:mm:ss)" id="pt" type="text" value={time} onChange={setT} />
      </TwoCol>
    </CalculatorShell>
  );
}