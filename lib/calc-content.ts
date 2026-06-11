// Static content for each calculator — SEO articles (800+ words) + FAQ
// Injected below the calculator widget on each page

export interface FAQItem {
  question: string;
  answer:   string;
}

export interface CalcContent {
  intro:       string;        // 2-3 paragraphs
  sections:    { heading: string; body: string }[];
  faqs:        FAQItem[];
  conclusion:  string;
}

const CONTENT: Record<string, CalcContent> = {

// ══════════════════════════════════════════════════════════════════
"mortgage": {
  intro: `A mortgage calculator is one of the most powerful tools available to homebuyers and homeowners alike. Whether you are purchasing your first home, refinancing an existing loan, or simply exploring how much house you can afford, understanding your monthly payment is the essential first step. This free mortgage calculator gives you an instant breakdown of your principal and interest payment, property taxes, and homeowner's insurance — commonly known as PITI — so you can plan your finances with confidence.

The United States housing market involves some of the largest financial commitments most people will ever make. A 30-year fixed-rate mortgage on a $350,000 home can result in total payments exceeding $750,000 by the time the loan is fully repaid. Understanding exactly where that money goes — and how small changes in interest rate, down payment, or loan term dramatically change the outcome — is what separates informed buyers from those who simply accept whatever their lender presents.`,

  sections: [
    {
      heading: "How Mortgage Payments Are Calculated",
      body: `Every fixed-rate mortgage payment is calculated using a mathematical formula called the amortization formula: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1], where P is your loan principal, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly payments.

For example, a $280,000 loan (after a $70,000 down payment on a $350,000 home) at 6.5% annual interest over 30 years produces a monthly payment of approximately $1,770. But that is just principal and interest. Add property taxes of $350 per month and insurance of $100 per month and your true PITI payment becomes $2,220 per month — about 25% higher than the base payment alone.

This is why so many first-time buyers are surprised by their actual monthly obligation. Lenders are required to disclose the full PITI in the Loan Estimate they provide within three business days of your application, so using a calculator beforehand helps you understand and verify those numbers.`,
    },
    {
      heading: "The Impact of Interest Rate on Total Cost",
      body: `The interest rate is arguably the single most important variable in your mortgage. The difference between a 6.0% and a 7.0% rate on a $300,000 loan over 30 years is not merely 1% — it is approximately $63,000 in total additional interest paid over the life of the loan. On a monthly basis, the difference is about $175 per month.

This is why financial advisors strongly recommend shopping for mortgage rates from at least three to five lenders before committing. Even a 0.25% improvement in rate can save tens of thousands of dollars over a 30-year term. Credit scores play a major role: borrowers with scores above 760 typically receive the best available rates, while scores below 620 may not qualify for conventional financing at all.

Federal Reserve monetary policy directly influences mortgage rates. When the Fed raises the federal funds rate to combat inflation, mortgage rates typically follow. In 2022 and 2023, rates rose from near-historic lows of around 3% to over 7%, dramatically reducing purchasing power for millions of American buyers.`,
    },
    {
      heading: "Down Payment: How Much Do You Really Need?",
      body: `The conventional wisdom of a 20% down payment exists for one primary reason: private mortgage insurance (PMI). When you put down less than 20%, lenders require PMI to protect themselves against default. PMI typically costs between 0.5% and 1.5% of the loan amount annually — on a $300,000 loan, that is $1,500 to $4,500 per year, or $125 to $375 per month added to your payment.

However, many loan programs allow lower down payments. FHA loans require just 3.5% down for borrowers with credit scores of 580 or higher. VA loans for eligible veterans and active military require zero down payment. USDA loans for rural properties also offer zero-down financing. Conventional loans through Fannie Mae and Freddie Mac are available with as little as 3% down through first-time homebuyer programs.

The right down payment depends on your financial situation, how long you plan to stay in the home, and current market conditions. A larger down payment reduces your monthly payment and eliminates PMI sooner, but it also reduces the cash reserves available for home maintenance and emergencies.`,
    },
    {
      heading: "Loan Term: 15 vs 20 vs 30 Years",
      body: `Choosing your loan term is a fundamental decision that shapes your financial life for decades. The 30-year fixed mortgage is by far the most popular choice in America because it offers the lowest monthly payment, preserving cash flow for other investments and expenses. However, it comes at a significant cost: you pay interest for twice as long compared to a 15-year loan.

A 15-year mortgage on the same loan amount typically carries a slightly lower interest rate — often 0.5% to 0.75% lower than the 30-year equivalent — and builds equity much faster. The monthly payment is substantially higher, but the total interest paid is dramatically less. A borrower who chooses a 15-year term over a 30-year term on a $300,000 loan at typical rates can save over $150,000 in total interest.

The 20-year mortgage is an underappreciated middle ground. It offers meaningfully higher equity accumulation than a 30-year loan while keeping payments more affordable than a 15-year loan. Some borrowers also choose to take a 30-year loan but make extra principal payments voluntarily, gaining the flexibility of a lower required payment while aggressively paying down debt when finances allow.`,
    },
  ],

  faqs: [
    { question: "What is the difference between pre-qualification and pre-approval?", answer: "Pre-qualification is an informal estimate of how much you may be able to borrow, based on self-reported information. Pre-approval is a formal process where the lender verifies your income, assets, credit, and employment. Pre-approval carries much more weight with sellers and gives you a realistic picture of your purchasing power." },
    { question: "Should I choose a fixed-rate or adjustable-rate mortgage?", answer: "A fixed-rate mortgage keeps the same interest rate and payment for the entire loan term, providing predictability. An adjustable-rate mortgage (ARM) offers a lower initial rate for a set period (commonly 5, 7, or 10 years) before adjusting annually. ARMs make sense if you plan to sell or refinance before the adjustment period begins, but carry risk if rates rise significantly." },
    { question: "How much house can I afford?", answer: "The standard guideline is the 28/36 rule: your monthly housing costs (PITI) should not exceed 28% of your gross monthly income, and total debt payments (housing plus car loans, student loans, credit cards) should not exceed 36%. Lenders may allow higher ratios for strong borrowers, but staying within these limits reduces financial stress." },
    { question: "What is an amortization schedule?", answer: "An amortization schedule is a complete table showing each monthly payment broken down into principal and interest. In the early years of a mortgage, the vast majority of each payment goes toward interest. Over time, the balance shifts toward principal. This calculator shows an annual summary of this process." },
    { question: "How does extra principal payment affect my mortgage?", answer: "Making even one extra mortgage payment per year — or adding a fixed amount to each monthly payment — can shave years off your loan and save tens of thousands in interest. For example, paying an extra $200 per month on a $300,000 30-year mortgage at 6.5% can cut approximately 5 years off the loan and save over $60,000 in interest." },
    { question: "What closing costs should I expect?", answer: "Closing costs typically range from 2% to 5% of the loan amount and include origination fees, appraisal, title insurance, attorney fees, and prepaid items like homeowner's insurance and property tax escrow. On a $350,000 home, expect to budget $7,000 to $17,500 in closing costs beyond your down payment." },
  ],

  conclusion: `Understanding your mortgage payment is not just about knowing a number — it is about making one of the most consequential financial decisions of your life with full information. Use this calculator to explore different scenarios: what happens if you increase your down payment, choose a 15-year term, or find a rate 0.5% lower? Each scenario reveals real dollar differences that can guide your decisions. When you are ready to move forward, consult with multiple lenders, review the Loan Estimate carefully, and ensure you are comfortable with the payment across various life scenarios, not just today's circumstances.`,
},

// ══════════════════════════════════════════════════════════════════
"bmi": {
  intro: `Body Mass Index, commonly known as BMI, is a widely used screening measurement that helps assess whether a person's weight is in a healthy range relative to their height. Developed in the 1830s by Belgian mathematician Adolphe Quetelet, BMI has become the standard tool used by healthcare providers, public health organizations, and researchers worldwide to categorize weight status and identify potential health risks associated with being underweight, overweight, or obese.

While BMI is not a direct measure of body fat percentage, it provides a quick, non-invasive, and cost-free way to identify individuals who may be at risk for weight-related health conditions. The World Health Organization, the Centers for Disease Control and Prevention, and the National Institutes of Health all use BMI as a primary screening tool in clinical and population-level health assessments. Understanding your BMI is therefore an important first step in taking ownership of your long-term health.`,

  sections: [
    {
      heading: "How BMI Is Calculated",
      body: `The BMI formula is straightforward: divide your weight in kilograms by the square of your height in meters. For those using imperial measurements, the formula is: BMI = (weight in pounds × 703) ÷ (height in inches)². The resulting number falls into one of four WHO-defined categories: below 18.5 is Underweight, 18.5 to 24.9 is Normal weight, 25.0 to 29.9 is Overweight, and 30.0 or above is Obese.

For a concrete example: a person who is 5 feet 9 inches tall (175 cm) and weighs 175 pounds (79.5 kg) has a BMI of approximately 25.8, placing them in the Overweight category. The same person at 160 pounds (72.6 kg) would have a BMI of 23.6, comfortably in the Normal range.

The healthy weight range varies significantly by height. A person who is 5 feet 4 inches tall has a healthy weight range of approximately 108 to 145 pounds. A person who is 6 feet tall has a healthy range of approximately 136 to 183 pounds. These ranges are why BMI must always be interpreted in the context of height, not just absolute weight.`,
    },
    {
      heading: "BMI Categories and Associated Health Risks",
      body: `Each BMI category is associated with different health risk profiles, though it is critical to understand that BMI is a screening tool, not a diagnostic measure. Being in the Overweight or Obese category increases statistical risk for type 2 diabetes, cardiovascular disease, hypertension, certain cancers, sleep apnea, osteoarthritis, and all-cause mortality.

The Obese category is further subdivided by many healthcare providers into Class 1 (BMI 30.0–34.9), Class 2 (BMI 35.0–39.9), and Class 3 (BMI 40.0 and above, sometimes called extreme or morbid obesity). Higher obesity classes are associated with significantly elevated health risks and may qualify individuals for medical interventions including bariatric surgery.

Being Underweight (below 18.5) carries its own distinct health risks including malnutrition, weakened immune function, bone density loss, anemia, and fertility problems. Underweight status may indicate underlying conditions such as eating disorders, hyperthyroidism, or malabsorption disorders that warrant medical evaluation.`,
    },
    {
      heading: "Limitations of BMI: What It Does Not Measure",
      body: `BMI's primary limitation is that it does not distinguish between fat mass and lean mass. A muscular athlete might have a BMI in the Overweight range despite having very low body fat, while a sedentary person with little muscle mass might have a Normal BMI despite having high body fat — a condition sometimes called "skinny fat" or normal-weight obesity.

Age, sex, ethnicity, and bone structure also affect how BMI should be interpreted. Women naturally carry more body fat than men at the same BMI. Older adults typically have more body fat than younger adults at the same BMI. Research suggests that Asian populations may face elevated health risks at lower BMI thresholds than the standard WHO categories suggest — some Asian health organizations use a cut-off of 23.0 for Overweight rather than 25.0.

For a more complete picture of health and body composition, healthcare providers may use waist circumference, waist-to-hip ratio, body fat percentage measurements (via DEXA scan, hydrostatic weighing, or bioelectrical impedance), and blood markers alongside BMI.`,
    },
  ],

  faqs: [
    { question: "Is BMI accurate for athletes and very muscular people?", answer: "No. BMI significantly overestimates health risk for highly muscular individuals because muscle weighs more than fat. A professional football player or bodybuilder might have a BMI in the obese range with very low body fat. For athletes, body fat percentage measured by DEXA scan or hydrostatic weighing provides a far more accurate assessment." },
    { question: "Does BMI apply to children?", answer: "Children use a different BMI assessment called BMI-for-age, which compares a child's BMI to other children of the same age and sex using CDC growth charts. A child is considered overweight if their BMI-for-age is at or above the 85th percentile, and obese at or above the 95th percentile. Adult BMI categories do not apply to children under 18." },
    { question: "How often should I check my BMI?", answer: "BMI is most useful as a periodic health marker rather than something to track daily. For adults with a healthy BMI and stable lifestyle, checking annually is appropriate. For individuals working on weight loss or management, monthly tracking alongside other metrics (waist circumference, body composition, blood pressure) provides a more complete picture." },
    { question: "What is a healthy BMI for older adults?", answer: "Research suggests that for adults over 65, a slightly higher BMI may actually be protective. Some studies indicate that older adults with BMI in the 25–27 range have lower mortality risk than those in the lower end of the Normal range. This is because low BMI in older adults often indicates muscle loss (sarcopenia), which is itself a significant health risk." },
    { question: "Can I have a healthy BMI but still be unhealthy?", answer: "Yes. Normal-weight obesity — having a healthy BMI but high body fat percentage — is a recognized condition. People with this profile may have metabolic risk factors similar to those who are overweight, including insulin resistance, elevated triglycerides, and high blood pressure. This reinforces why physical activity, diet quality, and regular health screenings matter regardless of BMI." },
  ],

  conclusion: `BMI is a useful starting point for understanding your weight-related health status, but it is only one piece of a larger health picture. Use this calculator as a guide, but work with your healthcare provider to interpret your results in the context of your overall health, lifestyle, fitness level, and family history. The most important insight BMI can provide is not a judgment, but a prompt for a conversation with your doctor about what steps, if any, might support your long-term wellbeing.`,
},

// ══════════════════════════════════════════════════════════════════
"loan": {
  intro: `A loan calculator is an essential financial planning tool for anyone considering borrowing money. Whether you are financing a personal expense, consolidating debt, funding a home improvement project, or covering an unexpected emergency, understanding the true cost of borrowing — including every dollar of interest you will pay — is critical to making a financially sound decision. This free loan calculator instantly shows you your monthly payment, total amount paid, and total interest cost for any loan amount, interest rate, and repayment term.

Personal loans in the United States carry a wide range of interest rates, from as low as 6% to 7% for borrowers with excellent credit to 36% or higher for subprime borrowers or those using certain alternative lenders. On a $20,000 loan over 5 years, the difference between a 7% rate and a 24% rate represents over $15,000 in additional interest paid. This calculator makes those differences visible before you sign any agreement.`,

  sections: [
    {
      heading: "Understanding Your Loan Payment Formula",
      body: `Every fixed-rate loan payment is calculated using the same amortization formula used for mortgages: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ − 1]. In this formula, P is the principal amount borrowed, r is the monthly interest rate (annual percentage rate divided by 12), and n is the total number of monthly payments.

Consider a $15,000 personal loan at 8% annual interest over 48 months. The monthly rate is 0.667%. The monthly payment works out to approximately $366. Over the 48-month life of the loan, you will make total payments of $17,568, meaning $2,568 of that total is pure interest. This is the fundamental cost of borrowing money — and the longer the term, the more total interest you pay even if the rate stays the same.

Amortization means that each payment allocates a different mix of principal and interest. In the early months, more of each payment goes toward interest. As you pay down the balance, more goes toward principal. This is why making extra payments early in a loan's life has a disproportionately large impact on reducing total interest.`,
    },
    {
      heading: "Types of Personal Loans and When to Use Them",
      body: `Personal loans come in two primary forms: secured and unsecured. Secured loans require collateral — an asset the lender can claim if you default — which typically results in lower interest rates. Auto loans and home equity loans are common examples of secured lending. Unsecured personal loans require no collateral, making them faster to obtain but typically carrying higher rates since the lender bears more risk.

Common uses for personal loans include debt consolidation (combining multiple high-interest debts into a single lower-rate loan), home improvement projects, medical expenses, wedding costs, moving expenses, and emergency financial needs. Debt consolidation is one of the most financially sound uses: replacing 24% credit card debt with a 10% personal loan saves thousands of dollars in interest while simplifying monthly payments into one.

Payday loans and certain installment loan products from non-bank lenders can carry effective annual percentage rates exceeding 100% or even 400%. This calculator can help you see exactly why financial advisors universally caution against such products except in absolute emergencies — the interest cost is staggering relative to the amount borrowed.`,
    },
    {
      heading: "How Your Credit Score Affects Loan Terms",
      body: `Your credit score is the single most important factor determining the interest rate you will be offered on a personal loan. Lenders use credit scores to assess the probability that you will repay the debt as agreed. Higher scores signal lower risk, resulting in lower rates. Lower scores signal higher risk, resulting in higher rates — or outright denial.

FICO scores, which range from 300 to 850, are the most widely used in lending decisions. Borrowers with scores above 760 typically qualify for the best available rates. Scores between 700 and 759 receive good rates. Scores between 650 and 699 receive average rates. Scores below 650 face significantly higher rates or limited options.

Beyond the credit score itself, lenders also evaluate your debt-to-income ratio (DTI), employment history, income stability, and existing debt obligations. Most lenders prefer a DTI below 36%, though some will lend to borrowers with DTI up to 43% or higher. Improving your credit score before applying — by paying down existing balances, avoiding new credit inquiries, and correcting any errors on your credit report — can meaningfully reduce the rate you receive.`,
    },
  ],

  faqs: [
    { question: "What is the difference between APR and interest rate?", answer: "The interest rate is the base cost of borrowing the principal amount, expressed as an annual percentage. The Annual Percentage Rate (APR) includes the interest rate plus any fees charged by the lender — origination fees, processing fees, and so on — expressed as a single annual rate. APR is always equal to or higher than the interest rate and is the better number to compare across lenders because it reflects the true total cost of borrowing." },
    { question: "Should I choose a shorter or longer loan term?", answer: "A shorter term means higher monthly payments but significantly less total interest paid. A longer term means lower monthly payments but more total interest. Choose the shortest term whose monthly payment fits comfortably within your budget. If a shorter-term payment would strain your finances, the longer term provides flexibility — but try to make occasional extra payments to reduce the total interest cost." },
    { question: "Can I pay off a personal loan early?", answer: "Many lenders allow early payoff with no penalty. However, some lenders charge a prepayment penalty — typically a percentage of the remaining balance or several months' worth of interest. Always check for prepayment penalties before signing a loan agreement, especially if you plan to pay off the loan early. If no penalty exists, paying even a small extra amount each month significantly reduces total interest." },
    { question: "How does a loan affect my credit score?", answer: "Applying for a loan generates a hard inquiry on your credit report, which temporarily reduces your score by a few points. Once the loan is open, it adds to your credit mix (which is positive) but increases your total debt load. Making all payments on time is the most important factor — consistent on-time payment history builds credit. Paying off the loan increases your available credit and reduces DTI, both positive for your score." },
    { question: "What is a good interest rate for a personal loan?", answer: "As of recent years, personal loan rates range widely based on creditworthiness. Rates below 10% are considered excellent and are typically available only to borrowers with very strong credit. Rates between 10% and 20% are average. Rates above 20% are high, and any rate above 36% should be considered a last resort given the extremely high cost of borrowing." },
  ],

  conclusion: `A loan can be a valuable financial tool when used thoughtfully and purposefully. The key is understanding the full cost before you commit — total interest paid, monthly payment impact on your budget, and how the rate compares to alternatives. Use this calculator to explore different scenarios, compare offers from multiple lenders, and find the combination of amount, rate, and term that serves your financial goals without overextending your budget.`,
},

// ══════════════════════════════════════════════════════════════════
"calorie": {
  intro: `Understanding how many calories your body needs each day is the foundation of any evidence-based approach to nutrition, weight management, and overall health. Whether your goal is to lose weight, gain muscle, maintain your current weight, or simply fuel an active lifestyle with appropriate energy, knowing your Total Daily Energy Expenditure (TDEE) gives you the data-driven starting point that makes all other dietary decisions meaningful.

This calorie calculator uses the Mifflin-St Jeor equation, which has been consistently validated in multiple independent studies as the most accurate formula for estimating Basal Metabolic Rate (BMR) — the number of calories your body burns at complete rest — for the majority of adults. By multiplying your BMR by an activity factor that reflects how much you move throughout the day, the calculator produces your TDEE: the total calories you need to maintain your current weight.`,

  sections: [
    {
      heading: "The Science Behind Calorie Calculation",
      body: `Calorie needs are determined by two primary components: your Basal Metabolic Rate and your activity level. BMR represents the energy your body requires simply to sustain basic physiological functions — breathing, circulation, cell repair, temperature regulation, and organ function — without any movement at all. For most adults, BMR accounts for 60% to 75% of total daily calorie expenditure.

The Mifflin-St Jeor equations are: For men: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age in years) + 5. For women: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age in years) − 161. These equations were published in 1990 and subsequently validated across diverse populations as superior to the older Harris-Benedict equations, which tend to overestimate calorie needs.

Activity multipliers are applied to BMR to estimate TDEE: Sedentary (desk job, minimal exercise) × 1.2; Lightly active (light exercise 1-3 days/week) × 1.375; Moderately active (moderate exercise 3-5 days/week) × 1.55; Very active (hard exercise 6-7 days/week) × 1.725; Extra active (physical job plus daily exercise) × 1.9. Choosing the right activity level is critical — most people underestimate their sedentariness or overestimate their activity level.`,
    },
    {
      heading: "Calorie Deficits, Surpluses, and Weight Change",
      body: `The fundamental principle of weight management is energy balance: consume more calories than you burn and you gain weight; consume fewer and you lose weight. One pound of body fat stores approximately 3,500 calories of energy. A sustained daily deficit of 500 calories should theoretically produce about one pound of fat loss per week — though the reality is more complex due to metabolic adaptation, hormonal changes, and composition differences between individuals.

For weight loss, a deficit of 500 to 750 calories per day is generally considered safe and sustainable, producing 0.5 to 1.5 pounds of weekly weight loss for most people. Larger deficits can be counterproductive: very low calorie diets trigger metabolic adaptation (your body reduces its energy expenditure to conserve fuel), increase muscle catabolism, cause micronutrient deficiencies, and are difficult to maintain psychologically.

For muscle gain, a modest calorie surplus of 200 to 500 calories above TDEE is typically recommended. A smaller surplus minimizes fat gain while providing adequate energy for muscle synthesis. Protein intake is equally critical for muscle building — most evidence supports 0.7 to 1.0 grams of protein per pound of body weight daily for individuals engaged in resistance training.`,
    },
    {
      heading: "Why Calorie Counting Has Limitations",
      body: `While understanding calorie targets is valuable, calorie counting has inherent limitations that are important to recognize. Food labels in the United States are permitted a margin of error of up to 20% — meaning a product labeled as 300 calories could legally contain anywhere from 240 to 360 calories. Restaurant meals, fresh produce, and home-cooked food are subject to even greater estimation uncertainty.

Individual variation in calorie absorption and metabolism is also significant. Gut microbiome composition, food preparation methods (raw versus cooked food releases different amounts of energy), and genetic factors all affect how many calories your body actually extracts from the food you eat. Two people with identical height, weight, age, and activity levels can have meaningfully different actual calorie needs.

This is why many nutrition researchers and registered dietitians recommend using calorie targets as general guides rather than precise prescriptions. Regular monitoring of actual weight trends over 2 to 4 weeks provides real-world feedback about whether your calorie intake is producing the expected results — and allows for adjustment based on evidence rather than theory alone.`,
    },
  ],

  faqs: [
    { question: "How accurate is a calorie calculator?", answer: "Calorie calculators using validated equations like Mifflin-St Jeor are accurate within approximately 10% for most adults. This means if the calculator estimates 2,200 calories, your actual needs are likely between 1,980 and 2,420 calories. Use the result as a starting point, monitor your weight for 2-3 weeks, and adjust up or down by 100-200 calories based on your actual results." },
    { question: "Why am I not losing weight even in a calorie deficit?", answer: "Several factors can stall weight loss despite a theoretical calorie deficit: underestimating portion sizes or calories in food, overestimating exercise calorie burn, water retention from high sodium intake or hormonal fluctuations, stress-related hormonal changes (elevated cortisol promotes fat storage), insufficient sleep, or metabolic adaptation to prolonged restriction. A diet break — eating at maintenance calories for 1-2 weeks — can help reset metabolic rate." },
    { question: "Should I eat back calories burned during exercise?", answer: "It depends on how the activity factor in your TDEE calculation was determined. If you used the Moderately Active or higher multiplier accounting for your exercise, those calories are already included in your TDEE — eating them back would create a surplus. If you chose Sedentary and track exercise separately, eating back a portion (50-75%) of exercise calories is reasonable, since most fitness tracker estimates of burn are overstated." },
    { question: "How many calories should I cut to lose 1 pound per week?", answer: "A traditional guideline is a 500-calorie daily deficit to lose approximately 1 pound per week (7 × 500 = 3,500 calories ≈ 1 lb of fat). In practice, initial weight loss is often faster due to water loss, and later loss may be slower due to metabolic adaptation. A deficit of 500 calories is generally considered safe and sustainable for most adults." },
    { question: "Do I need to count calories to lose weight?", answer: "No. Calorie counting is one effective strategy but not the only one. Many people achieve successful weight management through mindful eating, portion control using hand-based guides, eliminating specific high-calorie food categories (ultra-processed foods, sugary beverages), following structured dietary approaches like Mediterranean or DASH diets, or intermittent fasting. The best approach is the one you can adhere to consistently long-term." },
  ],

  conclusion: `Your daily calorie target is a powerful piece of self-knowledge that can transform how you approach food and health decisions. Use this calculator as a compass — directionally accurate, giving you the general territory of your needs — and then let real-world results over several weeks refine the target to your unique biology. Pair calorie awareness with a focus on food quality, adequate protein, regular physical activity, and sufficient sleep for outcomes that are both measurable and sustainable.`,
},

// ══════════════════════════════════════════════════════════════════
"tax": {
  intro: `Understanding how the United States federal income tax system works is essential for every American worker, investor, and business owner. The US tax system is progressive, meaning different portions of your income are taxed at different rates — a concept that is widely misunderstood and often causes people to make poor financial decisions based on incorrect assumptions about how taxes work. This income tax calculator provides an estimate of your 2024 federal income tax liability based on your gross income, filing status, and deductions.

The federal income tax is collected by the Internal Revenue Service (IRS) and funds the majority of federal government operations, including national defense, Social Security, Medicare, and infrastructure. For the 2024 tax year, there are seven marginal tax brackets ranging from 10% to 37%, with the specific thresholds varying by filing status. Knowing which bracket your income falls into — and understanding that this rate applies only to income above that threshold, not your entire income — is foundational to financial literacy.`,

  sections: [
    {
      heading: "How the Progressive Tax System Works",
      body: `The most common misconception about income taxes is that moving into a higher tax bracket means your entire income is taxed at the higher rate. This is incorrect. The US uses a marginal tax rate system, meaning each bracket rate applies only to the income within that bracket's range. Only the portion of income above each threshold is taxed at the higher rate.

For a single filer in 2024: the first $11,600 of taxable income is taxed at 10%. Income from $11,601 to $47,150 is taxed at 12%. Income from $47,151 to $100,525 is taxed at 22%. Income from $100,526 to $191,950 is taxed at 24%. Each subsequent slice is taxed at 32%, 35%, and finally 37% for taxable income above $609,350.

So if a single filer has taxable income of $75,000, they do not pay 22% on all $75,000. They pay 10% on the first $11,600, 12% on the next $35,550, and 22% on the remaining $27,850 — producing a total federal tax bill of approximately $12,000, which is an effective rate of about 16%, not 22%.`,
    },
    {
      heading: "Standard Deduction vs. Itemized Deductions",
      body: `Before applying tax brackets, you reduce your gross income by deductions to arrive at taxable income. Every taxpayer chooses between the standard deduction — a fixed amount that reduces taxable income without documentation — and itemized deductions, which require detailed records of qualifying expenses.

For 2024, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, and $21,900 for head of household. The Tax Cuts and Jobs Act of 2017 roughly doubled the standard deduction, which is why approximately 90% of taxpayers now claim the standard deduction rather than itemizing.

Itemized deductions may exceed the standard deduction if you have significant mortgage interest, state and local taxes (capped at $10,000), charitable contributions, or large unreimbursed medical expenses (above 7.5% of AGI). Homeowners in high-tax states with large mortgages are most likely to benefit from itemizing. For everyone else, the standard deduction almost always produces a lower tax bill.`,
    },
    {
      heading: "Tax Credits, FICA, and Other Taxes Not Included Here",
      body: `This calculator estimates federal income tax only — an important limitation to understand. Your total tax burden includes additional components not reflected here. FICA taxes — Social Security (6.2% on wages up to $168,600 in 2024) and Medicare (1.45% on all wages, plus 0.9% above $200,000) — are collected separately from income tax and are mandatory for most workers.

State income taxes vary dramatically. Nine states have no income tax (Florida, Texas, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, and New Hampshire on wages). Others, like California and New York, have rates up to 13.3% and 10.9% respectively. State tax adds significantly to the overall effective rate for most Americans.

Tax credits differ from deductions in an important way: deductions reduce taxable income, while credits directly reduce tax owed dollar for dollar. Major federal tax credits include the Child Tax Credit (up to $2,000 per qualifying child), Earned Income Tax Credit for lower-income workers, education credits, and clean energy credits. This calculator does not apply credits, so your actual tax liability after credits will typically be lower than the estimate shown.`,
    },
  ],

  faqs: [
    { question: "What is the difference between effective tax rate and marginal tax rate?", answer: "Your marginal tax rate is the rate applied to your last dollar of income — the rate of your highest bracket. Your effective tax rate is your total tax divided by your total income, reflecting the blended rate across all brackets. For most middle-income taxpayers, the effective rate is significantly lower than the marginal rate. This distinction matters when evaluating financial decisions like retirement contributions." },
    { question: "How do I reduce my federal income tax legally?", answer: "The most impactful legal tax reduction strategies include maximizing pre-tax retirement contributions (401k up to $23,000 in 2024, IRA up to $7,000), contributing to Health Savings Accounts (HSA) if eligible (up to $4,150 for individuals), claiming all eligible deductions and credits, timing income and deductions across tax years strategically, and harvesting investment losses to offset capital gains." },
    { question: "When do I need to file a federal tax return?", answer: "For 2024, most single filers under 65 who earn more than $14,600 must file a federal return. Married filing jointly under 65 must file if combined income exceeds $29,200. Even if not required to file, you should file if federal income tax was withheld from your wages (to receive a refund) or if you qualify for refundable tax credits like the Earned Income Tax Credit." },
    { question: "What is the penalty for underpaying federal taxes?", answer: "If you underpay your tax liability by more than $1,000 during the year, you may owe an underpayment penalty calculated based on the IRS interest rate (currently 8% per year, adjusted quarterly). Most employed workers avoid this through paycheck withholding. Self-employed individuals must make quarterly estimated tax payments to avoid underpayment penalties." },
    { question: "How does getting married affect my taxes?", answer: "Marriage can produce either a 'marriage bonus' (lower combined taxes) or 'marriage penalty' (higher combined taxes) depending on the income distribution between spouses. When both spouses earn similar incomes, they often face a marriage penalty because their combined income pushes them into higher brackets than they would face separately. When incomes are highly unequal, marriage often produces a bonus." },
  ],

  conclusion: `Federal income tax is complex, and this calculator provides an estimate — not a substitute for professional tax advice. For straightforward tax situations, IRS Free File offers free tax preparation software for those who qualify. For more complex situations involving self-employment, investments, real estate, or business ownership, working with a CPA or enrolled agent can easily pay for itself in legitimate tax savings and peace of mind.`,
},

// ══════════════════════════════════════════════════════════════════
"age": {
  intro: `An age calculator provides the exact measurement of time elapsed between a birth date and any target date, expressed in years, months, days, and beyond. While calculating someone's age seems simple, the precise computation across different month lengths, leap years, and calendar irregularities makes an accurate calculator genuinely useful. This tool gives you the exact age down to the day — whether you need it for legal documents, medical records, academic eligibility, or simple curiosity.

Age calculations matter in numerous practical contexts throughout life. Many legal rights and obligations are age-dependent: voting eligibility at 18, eligibility for senior discounts at 55 or 65, Medicare eligibility at 65, and required minimum distributions from retirement accounts starting at 73. Academic enrollment cutoffs, sports league classifications, and insurance rate categories all hinge on precise age calculations. Even the Social Security Administration uses your exact birth date to determine your full retirement age, early retirement penalty, and delayed retirement credits.`,

  sections: [
    {
      heading: "How Age Is Precisely Calculated",
      body: `Age calculation is more nuanced than simply subtracting birth years. The standard method used in most Western countries counts complete years of life elapsed — meaning a person born on December 31, 2000 is still 23 years old on December 30, 2024, and turns 24 only on December 31, 2024.

The precise calculation works as follows: First, subtract the birth year from the target year to get a preliminary year count. Then check whether the birthday has occurred yet in the target year. If the month of the target date is earlier than the birth month, or if the month matches but the day is earlier than the birth day, subtract one year. The remaining months and days are calculated similarly, with adjustments for varying month lengths.

Leap year birthdays — those born on February 29 — present a special case. In most jurisdictions, people born on February 29 are considered to have their birthday on either February 28 or March 1 in non-leap years, depending on local laws and organizational policies. This has practical implications for driver's license expiration, contract terms, and other age-dependent legal matters.`,
    },
    {
      heading: "Age in Different Cultures and Legal Systems",
      body: `The concept of age is not universal. In South Korea, a traditional counting system (Korean age) adds one year to a person's age at birth (reflecting time in the womb) and then adds another year to everyone simultaneously on January 1 regardless of birth date. This means a child born on December 31 is considered 2 years old by Korean traditional counting just one day after birth. South Korea officially transitioned to the international age system in June 2023 for legal purposes, though cultural use of Korean age continues.

In Japan, the traditional age system (kazoedoshi) also adds one year at birth and increments on New Year's Day. While the Western age system is now standard for legal purposes in Japan, kazoedoshi is still referenced in some traditional contexts. China has historically used similar traditional age counting.

In the United States and most Western legal systems, age is counted in completed years since birth. This matters in specific legal contexts: the legal drinking age of 21 means a person must have completed 21 full years of life; the retirement age of 65 for Medicare eligibility means having reached one's 65th birthday, not simply being in one's 65th year of life.`,
    },
    {
      heading: "Age and Health: Why Your Biological Age May Differ From Chronological Age",
      body: `Chronological age — the number of years since birth — is what this calculator measures. But increasingly, medicine recognizes that biological age, the functional age of your body's tissues and systems, can differ substantially from chronological age and may be a better predictor of health outcomes.

Factors that accelerate biological aging include smoking, chronic stress, poor sleep, sedentary lifestyle, ultra-processed food consumption, and untreated chronic conditions. Factors that slow biological aging include regular aerobic exercise, strength training, Mediterranean-pattern diet, social connection, purpose and meaning, adequate sleep (7-9 hours for most adults), and managing stress.

Emerging research on epigenetic aging — measured through patterns of DNA methylation — has produced "biological age clocks" that can estimate biological age from blood samples. Studies consistently show that lifestyle factors produce 5 to 20 year differences in biological age between individuals with identical chronological ages. This research underscores why two 60-year-olds can have dramatically different health statuses, functional capacities, and life expectancies.`,
    },
  ],

  faqs: [
    { question: "How old am I in months?", answer: "Multiply your completed years of age by 12, then add the completed months since your last birthday. For example, if you are 32 years and 7 months old, you are 391 months old. This calculator shows your total days, which you can divide by 30.44 (average days per month) for an approximate month count, or divide by 7 for weeks." },
    { question: "What age is considered a senior citizen in the US?", answer: "There is no single universal definition. AARP membership begins at 50. Many restaurants and retailers offer senior discounts at 55, 60, or 65. Social Security early retirement benefits become available at 62. Medicare eligibility begins at 65. The Social Security Administration defines full retirement age as 67 for those born in 1960 or later. The Older Americans Act defines older adults as 60 and above." },
    { question: "How is age calculated for legal purposes like drinking or voting?", answer: "For legal age requirements in the US, you must have completed the required number of years since your birth date. On your 21st birthday, you have completed 21 years and are legally 21 for alcohol purchase purposes. On the day before your 21st birthday, you are still legally 20, regardless of what time you were born or what time the clock strikes midnight." },
    { question: "Can I calculate the age of a deceased person?", answer: "Yes — enter the person's birth date and the date of death as the 'Age At Date' field. This is useful for genealogical research, obituary writing, historical research, and estate matters. The calculator will show their age at the time of death in years, months, and days." },
    { question: "How many days old am I?", answer: "This calculator shows your total days. For reference, 10,000 days (approximately 27.4 years) is a milestone that many people celebrate. 25,000 days is approximately 68.5 years. 30,000 days is approximately 82.1 years. The total day count provides perspective on the actual quantity of time experienced — humans who live to 80 have experienced approximately 29,200 days." },
  ],

  conclusion: `Your age is one of the most fundamental facts about your existence — and yet its precise calculation involves more nuance than most people realize. Whether you are checking eligibility for a program, filling out a medical form, or simply reflecting on time passed, this calculator gives you exact figures instantly. Remember that while chronological age is fixed by biology and calendar, how you experience and express those years is substantially within your influence.`,
},

};

export function getCalcContent(id: string): CalcContent | null {
  return CONTENT[id] ?? null;
}
