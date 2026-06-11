// Legal disclaimer component — required for AdSense approval and US market compliance
// Different disclaimers per calculator category

interface Props {
  type: "financial" | "health" | "general" | "tax" | "legal";
  compact?: boolean;
}

const DISCLAIMERS = {
  financial: {
    icon: "⚠️",
    title: "Financial Disclaimer",
    text: `The results provided by this calculator are for <strong>informational and educational purposes only</strong> and do not constitute financial, investment, or lending advice. Calculator outputs are estimates based on the inputs you provide and standard mathematical formulas — actual results will vary based on lender terms, fees, credit score, market conditions, and other factors not captured here. <strong>Always consult a licensed financial advisor, mortgage broker, or CPA</strong> before making any significant financial decisions. USCalculator.net is not a licensed financial institution and does not offer financial products or services.`,
    className: "disclaimer-financial",
  },
  health: {
    icon: "🩺",
    title: "Health & Medical Disclaimer",
    text: `This calculator provides general health information for <strong>educational purposes only</strong> and is not a substitute for professional medical advice, diagnosis, or treatment. Results such as BMI, calorie needs, or body fat percentage are estimates and may not accurately reflect your individual health status. <strong>Always consult a qualified healthcare provider</strong> before making changes to your diet, exercise routine, or lifestyle based on calculator results. If you have a medical condition, are pregnant, or have special dietary needs, seek personalized guidance from a licensed professional.`,
    className: "disclaimer-health",
  },
  tax: {
    icon: "⚠️",
    title: "Tax Disclaimer",
    text: `Tax estimates provided here are <strong>approximations only</strong> and are based on general 2024 US federal tax brackets. This calculator does not account for state taxes, FICA (Social Security/Medicare), AMT, tax credits, deductions beyond the standard deduction, self-employment tax, capital gains, or other factors that may significantly affect your actual tax liability. <strong>Do not use these results to file your tax return.</strong> Consult a licensed CPA, enrolled agent, or tax professional for accurate tax advice tailored to your situation.`,
    className: "disclaimer-financial",
  },
  legal: {
    icon: "⚖️",
    title: "Legal Disclaimer",
    text: `The information provided by this calculator is for <strong>general informational purposes only</strong> and does not constitute legal advice. Laws and regulations vary by jurisdiction and change over time. <strong>Do not rely on calculator results as a substitute for professional legal counsel.</strong> Always consult a licensed attorney for advice specific to your legal situation.`,
    className: "disclaimer-financial",
  },
  general: {
    icon: "ℹ️",
    title: "Important Notice",
    text: `Results from this calculator are <strong>estimates only</strong> and are provided for informational purposes. Actual outcomes may differ based on real-world conditions, rounding, and factors not included in this tool. USCalculator.net makes no warranty regarding the accuracy or completeness of calculator results. <strong>Use results as a starting point</strong>, not as the sole basis for important decisions.`,
    className: "",
  },
};

export default function Disclaimer({ type, compact = false }: Props) {
  const d = DISCLAIMERS[type];
  return (
    <div
      className={`disclaimer-banner ${d.className}`}
      role="note"
      aria-label={d.title}
    >
      <span className="icon" aria-hidden="true">{d.icon}</span>
      <p>
        {!compact && (
          <strong style={{ display: "block", marginBottom: 4, fontSize: 12 }}>
            {d.title}
          </strong>
        )}
        <span dangerouslySetInnerHTML={{ __html: d.text }} />
      </p>
    </div>
  );
}
