"use client";

import { useRef } from "react";

interface PrintSection {
  label: string;
  value: string;
  accent?: boolean;
}

interface PrintPDFProps {
  title:       string;   // e.g. "Mortgage Calculator"
  icon?:       string;   // emoji
  inputs:      PrintSection[];
  results:     PrintSection[];
  note?:       string;
  formula?:    string;
}

export default function PrintPDF({ title, icon, inputs, results, note, formula }: PrintPDFProps) {

  function handlePrint() {
    // Build a self-contained print window with full styling
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });

    const inputRows  = inputs.map(r => `
      <tr>
        <td class="label">${r.label}</td>
        <td class="value">${r.value}</td>
      </tr>`).join("");

    const resultRows = results.map(r => `
      <tr class="${r.accent ? "accent" : ""}">
        <td class="label">${r.label}</td>
        <td class="value">${r.value}</td>
      </tr>`).join("");

    const formulaBlock = formula ? `
      <div class="formula-block">
        <div class="section-title">Formula</div>
        <code>${formula}</code>
      </div>` : "";

    const noteBlock = note ? `
      <p class="note">* ${note}</p>` : "";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} — USCalculator.net</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 12px;
      color: #1E293B;
      background: #fff;
      padding: 32px 40px;
      max-width: 680px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 3px solid #1B3A6B;
      padding-bottom: 14px;
      margin-bottom: 20px;
    }
    .brand { font-size: 18px; font-weight: 800; color: #1B3A6B; }
    .brand span { color: #F97316; }
    .brand-sub { font-size: 10px; color: #94A3B8; margin-top: 2px; }
    .meta { text-align: right; font-size: 10px; color: #64748B; line-height: 1.6; }

    /* ── Calculator title ── */
    .calc-title {
      font-size: 20px;
      font-weight: 800;
      color: #1B3A6B;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* ── Tables ── */
    .section-title {
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94A3B8;
      margin-bottom: 6px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    tr { border-bottom: 1px solid #F1F5F9; }
    tr:last-child { border-bottom: none; }

    td { padding: 8px 10px; }
    td.label { color: #64748B; width: 55%; font-size: 11px; }
    td.value { font-weight: 600; font-size: 12px; text-align: right; font-variant-numeric: tabular-nums; }

    /* Input table */
    .inputs-table { background: #F8FAFC; border-radius: 8px; overflow: hidden; }
    .inputs-table td { font-size: 11px; }

    /* Result table */
    .results-section {
      background: #EFF6FF;
      border: 2px solid #1B3A6B;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .results-section .inner { padding: 14px 16px; }

    tr.accent td.value { color: #F97316; font-size: 14px; }
    tr.accent td.label { font-weight: 600; color: #1E293B; font-size: 12px; }

    /* First result row — biggest */
    .results-section tr:first-child td.value {
      font-size: 22px;
      font-weight: 800;
      color: #1B3A6B;
    }
    .results-section tr:first-child td.label {
      font-size: 11px;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .results-section tr:first-child { border-bottom: 1px solid #BFDBFE; }

    /* ── Formula ── */
    .formula-block {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 12px 14px;
      margin-bottom: 20px;
    }
    .formula-block code {
      font-family: 'Courier New', monospace;
      font-size: 11px;
      color: #1B3A6B;
      display: block;
      margin-top: 6px;
    }

    /* ── Note ── */
    .note {
      font-size: 9px;
      color: #94A3B8;
      line-height: 1.6;
      border-top: 1px solid #F1F5F9;
      padding-top: 12px;
      margin-top: 4px;
    }

    /* ── Footer ── */
    .footer {
      margin-top: 24px;
      border-top: 1px solid #E2E8F0;
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #94A3B8;
    }

    /* ── Watermark ── */
    .watermark {
      position: fixed;
      bottom: 40px;
      right: 40px;
      opacity: 0.04;
      font-size: 72px;
      font-weight: 900;
      color: #1B3A6B;
      transform: rotate(-20deg);
      pointer-events: none;
      user-select: none;
    }

    @media print {
      body { padding: 0; }
      @page { margin: 20mm 15mm; size: A4; }
    }
  </style>
</head>
<body>

  <div class="watermark">US</div>

  <!-- Header -->
  <div class="header">
    <div>
      <div class="brand">US<span>Calculator</span>.net</div>
      <div class="brand-sub">Free Online Calculators</div>
    </div>
    <div class="meta">
      <div>${date}</div>
      <div>uscalculator.net</div>
    </div>
  </div>

  <!-- Title -->
  <div class="calc-title">
    ${icon ? `<span>${icon}</span>` : ""}
    ${title}
  </div>

  <!-- Inputs -->
  <div class="section-title">Inputs</div>
  <table class="inputs-table">
    <tbody>${inputRows}</tbody>
  </table>

  <!-- Results -->
  <div class="section-title">Results</div>
  <div class="results-section">
    <div class="inner">
      <table>
        <tbody>${resultRows}</tbody>
      </table>
    </div>
  </div>

  ${formulaBlock}
  ${noteBlock}

  <!-- Footer -->
  <div class="footer">
    <span>Generated by USCalculator.net — Free Online Calculators</span>
    <span>Results are estimates only. Not financial/medical advice.</span>
  </div>

</body>
</html>`;

    const win = window.open("", "_blank", "width=800,height=700");
    if (!win) return;
    win.document.write(html);
    win.document.close();
    win.onload = () => {
      win.focus();
      win.print();
    };
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-surface-border
        bg-white hover:bg-surface-muted text-sm font-semibold text-ink-muted
        hover:text-ink transition-all shadow-sm active:scale-95 touch-manipulation"
      title="Download as PDF"
    >
      <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
      Download PDF
    </button>
  );
}
