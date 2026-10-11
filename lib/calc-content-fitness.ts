// Long-form SEO content for fitness & health calculators
// Imported and merged into lib/calc-content.ts by getCalcContent()

import type { CalcContent } from "./calc-content";

export const CONTENT_FITNESS: Record<string, CalcContent> = {

// ══════════════════════════════════════════════════════════════════
"bodyfat": {
  intro: `Body fat percentage — the share of your total body weight that is fat — is a far more meaningful measure of body composition than weight or BMI alone. Two people can weigh exactly the same while having dramatically different fat percentages: one athletic and lean, the other carrying excess fat with less muscle. Tracking body fat percentage reveals which category you actually fall into.
\nThis calculator estimates body fat using the US Navy method, which derives your estimate from simple circumference measurements — neck, waist (and hip for women). It is accurate enough for personal tracking (typically within 2-3% of laboratory methods) while requiring no expensive equipment, making it the standard free approach for everyday monitoring.`,

  sections: [
    {
      heading: "The US Navy Body Fat Formula",
      body: `The Navy method correlates body fat with body circumference, using equations developed and validated for both sexes. For men, the inputs are neck and waist circumference at navel height; for women, neck, natural waist, and hip circumference are used, and the formulas are typically combined with height to produce an estimate for a reference height.
\nThe equations estimate the soldier's body fat percentage relative to height and are linear-regression based. For example, a 6-foot man with a 32-inch waist and 15-inch neck typically estimates near 15% body fat; the same man at a 38-inch waist estimates near 22%. Because the method is circumference-driven, it is most accurate for adults with typical muscle distributions and least reliable for very advanced bodybuilders or those with unusual proportions.
\nMeasurements must be taken consistently to be useful for tracking: breath held gently at navel level, tape snug but not compressing skin, and identical measurement points each time. Measurement technique variation of half an inch can shift the estimate by a full percentage point — hence always using the same routine.`,

    },
    {
      heading: "Healthy Body Fat Ranges by Age and Sex",
      body: `Essential fat is the minimum required for basic physiological function — roughly 3-5% for men and 10-13% for women, reflecting reproductive-system requirements. Athletes typically run 6-13% (men) and 14-20% (women); fit individuals 14-17% and 21-24%; average 18-24% and 25-31%; and above 25% (men) or 32% (women) constitutes obesity by body fat standards.
\nAging shifts the picture: healthy ranges increase with age because lean mass declines unless actively maintained. A 60-year-old carrying 25% body fat has a different risk profile than a 25-year-old at the same percentage. Absolute percentage matters less than trends and the presence of fat around the abdomen.
\nGold-standard laboratory methods (DEXA, hydrostatic weighing, BodPod) measure within 1-3%, while the Navy method estimates within about 3% for most people — sufficient for identifying whether you are in a healthy category and tracking changes over weeks. Consistency and trend matter more than the absolute number.`,

    },
    {
      heading: "Reducing Body Fat: Beyond the Scale",
      body: `Body weight can plateau while body fat falls as muscle is gained — which is why body fat percentage is a better progress metric than the scale. In a well-built recomposition phase, a person can hold steady at the same weight while dropping several percentage points of fat and gaining muscle.
\nFat loss is driven by a calorie deficit, but the composition of that loss depends heavily on strength training and protein intake. Research consistently shows that resistance training plus adequate protein (0.7-1.0g per pound of body weight) preserves lean mass during a deficit, so the majority of lost weight is true fat.
\nVisceral fat — the fat stored inside the abdominal cavity around organs — is the most metabolically harmful, linked to heart disease, diabetes, and metabolic syndrome. Waist and hip measurements that feed this calculator track overall fat, but keeping a waist-to-height ratio under 0.5 is an additional low-cost screen for visceral fat.`,

    },
  ],

  faqs: [
    { question: "How accurate is the US Navy body fat method?", answer: "For most adults, the naval circumference method estimates body fat within roughly 2-3% of laboratory methods like DEXA or hydrostatic weighing. Accuracy depends on measurement consistency and body proportions; it is ideal for tracking trends over time, where relative changes are more reliable than absolute values." },
    { question: "What is a good body fat percentage for men and women?", answer: "Athletes: men 6-13%, women 14-20%. Fit: men 14-17%, women 21-24%. Average: men 18-24%, women 25-31%. Obesity begins around 25% for men and 32% for women. Essential minimums are 3-5% for men and 10-13% for women — staying far below these is unhealthy and unsustainable." },
    { question: "Why is body fat percentage better than BMI?", answer: "BMI uses only height and weight, so it cannot distinguish fat from muscle — muscular people are often misclassified overweight or obese. Body fat percentage directly measures fat content, giving a truer picture of body composition and health risk, especially for athletes and older adults." },
    { question: "Should I measure body fat at the gym or at home?", answer: "Both, consistently. Bioelectrical impedance scales and caliper methods are portable but can vary with hydration; the Navy circumference method needs only a tape measure and is repeatable anywhere. Use one method consistently to watch trends rather than comparing different methods, which yield different absolute numbers." },
    { question: "Can I reduce body fat without losing muscle?", answer: "Yes — a modest calorie deficit (about 500 calories below maintenance), adequate protein (0.7-1.0g per pound of body weight), and regular resistance training preserve lean mass while fat is lost. A slower weight loss pace (0.5-1% of body weight per week) plus strength work maximizes muscle retention." },
  ],

  conclusion: `Body fat percentage converts vague feelings about weight into a concrete, trackable number that distinguishes fat loss from muscle loss. Use this calculator with consistent measurements to establish a baseline and monitor trends, keep healthy ranges in view, and combine a sensible calorie deficit with strength training and protein when reduction is the goal. The scale tells how much you weigh — body fat tells what you are actually made of.`,
},

// ══════════════════════════════════════════════════════════════════
"bmr": {
  intro: `Your Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest — the energy required just to keep you alive, breathing, circulating blood, and maintaining body temperature. It is the single largest component of your total daily calorie expenditure, typically accounting for 60-75% of everything you burn in a day.
\nKnowing your BMR is the foundation of scientifically sound nutrition. Weight loss requires eating below your total expenditure; muscle gain requires eating above; and both start with understanding the baseline your body demands. This free BMR calculator applies the Mifflin-St Jeor equation — the most extensively validated formula for most adults — to your height, weight, age, and sex in seconds.`,

  sections: [
    {
      heading: "The Mifflin-St Jeor Equation",
      body: `For men: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age in years) + 5. For women: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age in years) − 161. The equation was published in 1990 and has been validated in multiple independent studies as more accurate than the older Harris-Benedict formula, which tends to overestimate.
\nTo apply it with imperial units, weight in pounds is converted to kilograms (÷ 2.205) and height in inches to centimeters (× 2.54). The calculator handles both unit systems automatically.
\nA worked example: a 35-year-old man weighing 180 lb (81.6 kg) at 5'10" (178 cm) computes BMR = (10 × 81.6) + (6.25 × 178) − (5 × 35) + 5 = 816 + 1112.5 − 175 + 5 = 1,758 calories per day. A 30-year-old woman at 140 lb (63.5 kg), 5'5" (165 cm): (10 × 63.5) + (6.25 × 165) − (5 × 30) − 161 = 635 + 1031 − 150 − 161 = 1,355 calories.`,

    },
    {
      heading: "From BMR to Total Daily Energy Expenditure",
      body: `BMR is only part of the picture. Your total daily energy expenditure (TDEE) multiplies BMR by an activity factor: sedentary (× 1.2), lightly active (× 1.375), moderately active (× 1.55), very active (× 1.725), and extra active (× 1.9). The man above with a BMR of 1,758 who is moderately active needs about 2,725 calories daily to maintain weight.
\nTDEE shapes every goal. Losing about 1 lb per week requires a daily deficit near 500 calories — eating roughly 500 below TDEE. Gaining lean mass typically uses a 200-500 calorie surplus with adequate protein. Maintenance is simply eating at TDEE.
\nActivity level is the most error-prone input: desk workers who exercise 1-2 days weekly should use "lightly active," not "moderately." Most people overstate activity, which inflates TDEE and undermines weight-loss plans. When in doubt, use the lower factor and adjust based on observed weight trends over 2-3 weeks.`,

    },
    {
      heading: "What Affects Your BMR",
      body: `Muscle mass is the most controllable driver of BMR. Each pound of muscle burns more calories at rest than a pound of fat, and lean mass is metabolically active tissue. This is why resistance training raises BMR over time — it is the only activity that structurally increases your resting energy burn.
\nAge typically reduces BMR because lean mass tends to decline with years; the −5 × age term reflects this. Sex differences are built into the equations (men average higher lean mass). Height increases BMR by increasing body volume, and weight raises it directly through the 10 × weight term.
\nHormones and temperature also matter: thyroid function, illness, extreme environments, and adaptations from prolonged calorie restriction all modulate BMR. A sustained large deficit causes metabolic adaptation — BMR drops as the body conserves energy — which is why extreme diets plateau and why periodic diet breaks support long-term success.`,

    },
  ],

  faqs: [
    { question: "What is the difference between BMR and TDEE?", answer: "BMR is the calories your body burns at complete rest to sustain basic life functions. TDEE adds all physical activity — daily movement, exercise, and the thermic effect of food — to BMR. TDEE is effectively BMR multiplied by an activity factor and is the number to use for weight management." },
    { question: "How accurate is the Mifflin-St Jeor formula?", answer: "It is accurate to within roughly 10% for about 80% of the population, making it the most reliable equation for the general adult. Individual variation from genetics, muscle mass, and hormones means treat the result as a starting point and refine using actual weight trends over several weeks." },
    { question: "Why is my BMR so low compared to my intake?", answer: "BMR only covers rest; your daily needs include activity. If your BMR is, say, 1,400 calories, a light activity factor puts your TDEE near 1,600-1,800. Eating \"below BMR\" is a common misconception — weight loss targets relate to TDEE, not BMR." },
    { question: "Should I eat at my BMR to lose weight?", answer: "No. Eating at BMR is typically far too restrictive and triggers metabolic adaptation, muscle loss, and nutrient deficiencies. Aim for 300-500 calories below your TDEE, not below BMR, and prioritize protein and resistance training to protect lean mass." },
    { question: "Can I increase my BMR?", answer: "Yes, most effectively through gaining muscle via resistance training. Adequate sleep and managing stress support healthy metabolic rate; very low-calorie diets lower it. Remember modest changes: a 10 lb muscle gain adds roughly 50-80 calories of daily resting burn — meaningful cumulatively but not a free pass." },
  ],

  conclusion: `BMR is the keystone of personalized nutrition — the metabolic baseline every diet and training goal must be built around. Calculate yours, multiply by an honest activity factor to find TDEE, and set calorie targets from that foundation. Pair it with real-world feedback from the scale over several weeks, and you convert generic dietary advice into a plan calibrated to your own body.`,
},

// ══════════════════════════════════════════════════════════════════
"idealweight": {
  intro: `Your ideal weight is not a single number but a range — a healthy zone where your weight supports long-term wellbeing without the health risks of either underweight or excess body fat. An ideal weight calculator estimates that range from your height and sex, giving you a practical target whether you are planning weight loss, weight gain, or simply confirming you are in a healthy place.
\nIdeal-weight estimates are derived from population-based equations — commonly the Devine, Robinson, Miller, and Hamwi formulas — each producing slightly different numbers. The real value is not the precision of any one equation but the range they define, which health professionals broadly agree represents a sensible target for most adults.`,

  sections: [
    {
      heading: "How Ideal Weight Is Estimated",
      body: `The classic equations estimate ideal weight from height and sex. The Devine formula (used in most medical dosing contexts) gives men 50 kg + 2.3 kg per inch over 5 feet, and women 45.5 kg + 2.3 kg per inch over 5 feet. The Hamwi, Miller, and Robinson formulas each vary slightly in base weight and increments.
\nFor a 5'9" (175 cm) man: Devine gives 50 + 2.3 × 9 = 70.7 kg (about 156 lb). For a 5'5" (165 cm) woman: 45.5 + 2.3 × 5 = 57 kg (about 126 lb). The formulas converge on similar target ranges, and physicians commonly present ideal weight as a zone spanning roughly 5-10 kg around the formula result.
\nHeight-based approaches have limitations: they assume average frame size and average muscle proportions. A tall, broad-shouldered individual will naturally carry a slightly higher healthy weight than the equations suggest, and athletes exceed them legitimately because of lean mass. Use the range as guidance, not a verdict.`,

    },
    {
      heading: "Linking Ideal Weight and BMI",
      body: `The healthiest approach cross-references ideal-weight equations with BMI: the normal-weight BMI zone (18.5-24.9) defines weight ranges by height. For 5'9", the normal BMI range spans about 125-169 lb — the ideal-weight formulas land near the middle of that healthy band.
\nWhat matters for health is staying within a healthy range relative to your height, not chasing a precise pound figure. The risks of being significantly outside the range — metabolic syndrome, cardiovascular disease, diabetes, joint problems, sleep apnea, and impaired fertility on the high side; malnutrition, bone loss, and weakened immunity on the low side — all scale with distance from the healthy zone.
\nA useful refinement: rather than ideal weight alone, track body composition. A person at the top of the ideal-weight range with muscle and low body fat is healthier than someone at the bottom with high fat. Ideal weight is a screening target; waist circumference and body fat percentage confirm the composition inside the number.`,

    },
    {
      heading: "Practical Targeting: Gain, Lose, or Maintain",
      body: `If your current weight is above your ideal range, set a realistic staged target: the top of your healthy range first (a manageable 5-10% reduction), reassess, then continue. Losing 1-2 lb per week is sustainable and preserves muscle with adequate protein and strength training.
\nIf you are below the healthy range, the focus should shift to ensuring adequate caloric intake and lean mass — especially for athletes and older adults, where gaining a few pounds of muscle meaningfully improves health and resilience. Both directions benefit from monitoring waist circumference alongside weight.
\nBest practice is bringing the calculator's number into your routine, not your identity: weigh in on a consistent schedule, use trend over single measures, and adjust intake by real-world results. Ideal weight is a compass for habit, not a scorecard for self-criticism.`,

    },
  ],

  faqs: [
    { question: "What is the ideal weight for my height?", answer: "It varies by equation and sex, but healthy ranges align with a BMI of 18.5-24.9. For 5'9\" that is about 125-169 lb; for 5'5\", about 111-150 lb. Ideal-weight formulas (Devine, Hamwi, etc.) typically place your target near the middle of that range; frame size and muscle mass shift where you sit within it." },
    { question: "Are ideal weight calculators accurate?", answer: "They produce reasonable population targets, accurate for screening and goal setting, but they ignore body composition and frame size. Athletes and heavily muscled individuals will read as overweight despite being lean. Use them as a starting range and combine with body fat percentage for a complete picture." },
    { question: "Can my ideal weight change as I age?", answer: "Your healthy weight zone for disease risk rises modestly with age because lean mass typically declines, and guidelines for older adults often favor slightly higher weights to protect against frailty and mortality risk associated with low weight. The equations themselves use fixed height-based targets." },
    { question: "How long should it take to reach my ideal weight?", answer: "A sustainable rate is about 1-2 lb per week for loss or 0.5-1 lb per week for gain, so a 20 lb change takes roughly 3-5 months. Faster rates risk muscle loss and rebound. Aim for lifestyle changes you can maintain rather than a finish line you sprint to and abandon." },
    { question: "Do ideal weight formulas differ for men and women?", answer: "Yes — women's formulas use a lower base weight (45.5 kg versus 50 kg) reflecting lower average lean mass and the same per-inch increment, yielding lower ideal targets at equal heights. Individual muscle mass still matters more than sex alone in determining a healthy personal weight." },
  ],

  conclusion: `Ideal weight is best understood as a healthy range, not a fixed verdict. Calculate yours from your height, keep the range framed by BMI, and layer in body composition to personalize the target. Whatever direction you are heading — down, up, or holding steady — measure trends consistently, move slowly and sustainably, and let the healthy zone guide habits rather than define self-worth.`,
},

// ══════════════════════════════════════════════════════════════════
"pregnancy": {
  intro: `Pregnancy dating is one of the first numbers every expectant parent learns — and one of the most misunderstood. A pregnancy calculator estimates your due date and current week of pregnancy from your last menstrual period (LMP), the standard clinical method, and maps out your trimesters on a week-by-week schedule.
\nMost pregnancies last about 280 days (40 weeks) from the first day of the last menstrual period. Only about 4% of babies are born exactly on their estimated due date, and most are born between 38 and 42 weeks — so the due date is best understood as an estimate around which care is planned, not a promise.`,

  sections: [
    {
      heading: "How Pregnancy Dating Works",
      body: `The standard calculation counts from the first day of your last menstrual period: add 280 days (40 weeks), the average gestational age from LMP to delivery. Clinicians often use Naegele's rule as a shortcut — add 7 days to the LMP, subtract 3 months, add 1 year — which yields the same 40-week date.
\nGestational age counts from the first day of your period, which precedes conception by roughly two weeks. Because ovulation typically occurs about 14 days after the period's start, at "4 weeks pregnant" the embryo is actually about 2 weeks old. This dating convention is universal in medicine, and ultrasound measurements confirm and refine the estimate in the first trimester.
\nConception-date calculations (counting from ovulation) produce dates about 2 weeks earlier in gestational terms — a source of confusion when comparing due dates from different methods. This calculator follows standard LMP-based gestational dating used by providers.`,

    },
    {
      heading: "Trimesters and Milestones",
      body: `Pregnancy is divided into three trimesters. The first trimester (weeks 1-13) includes implantation and the development of all major organs; symptoms like nausea and fatigue peak here. The second trimester (weeks 14-27) is typically the most comfortable, with organ systems maturing and fetal movement becoming noticeable around weeks 18-22. The third trimester (weeks 28-40+) brings rapid growth and final maturation for birth.
\nWeekly milestones that parents commonly track: the heartbeat is usually detectable around 6 weeks, the first ultrasound often schedules between 8-12 weeks, anatomy scans occur around 18-22 weeks, gestational diabetes screening around weeks 24-28, and provider visits increase weekly after 36 weeks.
\nBecause due dates are estimates, providers mark the "term" window: early term (37-38 weeks), full term (39-41 weeks), and late/post term (41+ weeks). Babies born at 39-40 weeks generally have the best outcomes, and induction is typically considered after 41 weeks.`,

    },
    {
      heading: "Estimating Due Dates and Their Accuracy",
      body: `Due-date accuracy is highest in the first trimester. An ultrasound crown-rump-length measurement between 8-13 weeks dates a pregnancy within about ±5 days; later scans are progressively less precise as fetal size varies more. This is why providers recalculate the date if early ultrasound disagrees with the LMP-based estimate by more than a week.
\nCycle irregularity complicates LMP dating: women with cycles longer or shorter than 28 days, or unknown LMP dates, are better dated by ultrasound. Assisted reproduction (IVF) provides the most precise dating — the transfer date establishes gestational age within a day.
\nFor planning purposes, view your due date as a 40-week reference point within a normal 38-42 week delivery window. The calculator's week display lets you see where you are today, what trimester you are in, and how far you have to go — useful for scheduling milestones, tests, and preparation.`,

    },
  ],

  faqs: [
    { question: "How is my due date calculated?", answer: "The standard method adds 280 days (40 weeks) to the first day of your last menstrual period. This LMP method assumes a 28-day cycle with ovulation around day 14. First-trimester ultrasound may adjust the date if measurements differ significantly." },
    { question: "Is a 40-week due date exact?", answer: "No. Only about 4% of babies are born on their exact due date. A normal pregnancy lasts 38-42 weeks, and a due date is an estimate used to time care. Full-term is considered 39-41 weeks, where outcomes are generally best." },
    { question: "What if my cycle is irregular or I don't know my LMP?", answer: "Ultrasound dating in the first trimester is more reliable than LMP for irregular cycles or unknown dates. Your provider will typically perform an early ultrasound if LMP is uncertain, adjusting the due date accordingly." },
    { question: "When do the trimesters start and end?", answer: "First trimester: weeks 1-13. Second: weeks 14-27. Third: weeks 28 until delivery. Each has characteristic milestones — organ development in the first, movement and growth in the second, rapid maturation and readiness in the third." },
    { question: "Do I count from the day I conceived or my last period?", answer: "Medical pregnancy dating counts from the first day of your last menstrual period, which is about two weeks before conception. At '4 weeks pregnant,' developmentally the embryo is about 2 weeks old. Use the LMP-based gestational weeks that your provider and records use." },
  ],

  conclusion: `Knowing how pregnancy is dated transforms a confusing calendar into a clear roadmap. Use this calculator to see your current week, trimester, and estimated due date, and understand that the due date is a carefully estimated reference within a normal delivery window. Share the estimate with your provider, and let ultrasound in the first trimester refine it. The countdown has a number — but your baby decides the final date.`,
},

// ══════════════════════════════════════════════════════════════════
"due-date": {
  intro: `A due date calculator gives expecting families their estimated delivery date — the anchor around which prenatal care, parental leave, and baby preparations are scheduled. Using the first day of your last menstrual period (LMP), it estimates the date at 280 days (40 weeks) of gestation, the most widely used clinical method.
\nWhile the headline date is the big number, this calculator also shows the gestational week you are in, your progress through trimesters, and the normal delivery window (38-42 weeks). Understanding how the estimate works removes anxiety when the due date comes and goes — because a "late" date within that window is entirely normal.`,

  sections: [
    {
      heading: "How a Due Date Is Estimated",
      body: `The classic estimate begins at the LMP and adds 280 days. Naegele's rule expresses it conveniently: take the first day of your last period, add 7 days, subtract 3 months, and add a year. For an LMP of March 10, the due date estimates December 17 of the following calendar year.
\nThe 280-day convention assumes an average cycle length of 28 days with ovulation on day 14. For cycles that differ, adjusting may help: the estimate can be shifted by the difference between a longer cycle and 28 days. But the LMP method remains the practical first step for almost every pregnancy.
\nBecause the LMP is usually the most certain and universally recorded date, clinicians anchor initial dating to it, then validate with ultrasound — typically a crown-rump measurement between 8 and 13 weeks, which is the most precise dating tool available and may revise the date if the discrepancy exceeds a week.`,

    },
    {
      heading: "The Accuracy and Meaning of Your Due Date",
      body: `Fewer than 5% of babies arrive exactly on the estimated due date. Statistics from large birth databases show most births occur in the 38-40 week window, with a normal range defined as 37-42 weeks. Carrying to 41 weeks with a monitored pregnancy is common and generally safe; induction is usually considered at 41+ weeks.
\nPreterm delivery is defined as birth before 37 weeks and requires special care; postterm is birth after 42 weeks. Because the range is wide, parents are best served by treating the due date as a planning point rather than a deadline — packing the hospital bag earlier rather than later (around 36 weeks) is the practical takeaway.
\nDating accuracy matters most for medical decision-making. An accurate early ultrasound date helps providers assess growth over time, time genetic screening, and determine whether a post-dates pregnancy warrants intervention. The first-trimester ultrasound remains the gold standard for that reason.`,

    },
    {
      heading: "Adjusting for Irregular Cycles and IVF",
      body: `For women with regular cycles, LMP dating works well. For short cycles (21-25 days) or long cycles (35+ days), ultrasound is more reliable because the timing of ovulation — and therefore conception — varies more than 28-day convention assumes. Irregular, missing, or unknown LMP dates also push providers to ultrasound-based dating.
\nIVF pregnancies set the date precisely: for a day-5 blastocyst transfer, gestational age is the transfer date plus 19 days (or 266 days from conception, i.e., the transfer day for a fresh day-3 transfer plus 17 days). This removes virtually all dating uncertainty and is documented in the fertility clinic's records.
\nWherever your due date originates, the calculation serves the same purpose — planning care, tests, and timing. Record your LMP, let ultrasound refine the number in the first trimester, and treat subsequent due-date changes as standard practice rather than cause for alarm.`,

    },
  ],

  faqs: [
    { question: "How accurate is a due date from my last period?", answer: "For regular 28-day cycles it is reliable within a few days if confirmed by first-trimester ultrasound. LMP-based dates fall within about ±2 weeks in practice. Ultrasound between 8-13 weeks is the most accurate dating method and is used to confirm or adjust the estimate." },
    { question: "Why do due dates change between the LMP and ultrasound?", answer: "The LMP method assumes a 28-day cycle with ovulation on day 14. When actual ovulation timing differs — due to cycle length, irregularity, or unknown LMP — ultrasound measurement of fetal size provides a more accurate gestational date, and providers adjust when the difference is significant." },
    { question: "Can I calculate the due date if I know my conception date?", answer: "Yes — count 266 days (38 weeks) from the conception/ovulation date. That yields the same due date as adding 280 days to the LMP, because conception typically occurs about 14 days after the period starts. Conception-based dating is straightforward if the date is reliably known." },
    { question: "What does it mean is born at 41 weeks?", answer: "It is within the normal range, though considered \"late-term.\" Careful monitoring and possibly induction are recommended after 41 weeks, and pregnancies rarely continue meaningfully past 42 weeks. Most babies born at 41 weeks are healthy; the primary consideration is ensuring placental function continues normally." },
    { question: "Should I plan around my due date?", answer: "Plan around it, but expect flexibility in both directions. Schedule leave and baby preparation near your due date while understanding that the normal delivery window spans 38-42 weeks. The majority of first-time births occur slightly after the due date on average." },
  ],

  conclusion: `The due date is a meticulously calculated estimate that anchors prenatal care — not a precise appointment. Use this calculator with your LMP to get the date, gestational age, and trimestrial progress, and expect a first-trimester ultrasound to refine it. Understand the 38-42 week normal window and use your date as a roadmap for planning, while leaving generous room for your baby's own timing.`,
},

// ══════════════════════════════════════════════════════════════════
"pace": {
  intro: `Pace — the time it takes to cover a unit of distance, usually minutes per mile or kilometer — is the fundamental metric of every runner. Unlike raw speed, pace is how runners actually think: "I want to hold 9:30 per mile for a marathon" is the goal, not "I want to run at 6.3 mph." A pace calculator converts between pace, speed, distance, and finish time so you can plan training and predict races.
\nFor the beginner choosing a first 5K to the marathoner targeting a BQ (Boston Qualifying) time, pace governs every workout: easy miles, tempo runs, intervals, and goal race pace all hang off this one number. Understanding your pace and how it translates to finish times transforms training from vague effort to a measurable plan.`,

  sections: [
    {
      heading: "Pace, Speed, and Finish Time Conversions",
      body: `Pace in minutes per mile and speed in miles per hour are reciprocals: speed = 60 ÷ pace. A 9:00 per mile pace equals 6.7 mph. Converting between metric and imperial — 5:45 per kilometer equals 9:15 per mile — is essential for races measured in either unit.
\nFinish time = pace × distance. A half marathon (13.1 miles) at 9:00/mile finishes in 1:57:54; a full marathon (26.2 miles) at 10:00/mile finishes in 4:22:12. The calculator handles these conversions in both directions, letting you set a target finish time and work backward to the required pace — or plan a goal pace and see the realistic finish time.
\nA practical note: pace is usually quoted per unit averaged over the race, but real-world pacing includes hills, aid stations, and surges. Most race planners add 5-10% to goal average pace when setting time targets for hilly or hot courses.`,

    },
    {
      heading: "Marathon, Half, and Common Race Distances",
      body: `Standard race distances anchor pacing plans: 5K (3.1 miles), 10K (6.2 miles), half marathon (21.1 km / 13.1 miles), and marathon (42.2 km / 26.2 miles). Each distance demands a different sustainable intensity: a 5K runs near VO2max pace, the half near threshold pace, and the marathon at a highly controlled, fractionally slower endurance pace.
\nCommon goal-time benchmarks: a 25:00 5K is 8:03/mile; a 52:00 10K is 8:22/mile; a 2:00:00 half is 9:10/mile; a 4:00:00 marathon is 9:10/mile. Entering a target finish time in the calculator immediately reveals the required pace and whether it aligns with your training.
\nFor training, easy runs are typically 60-90 seconds per mile slower than goal race pace, tempo runs near 25-30 seconds slower than race pace, and interval sessions faster. Using the calculator across these paces keeps every workout purposeful.`,

    },
    {
      heading: "Improving Your Pace Safely",
      body: `Most runners improve pace by increasing weekly mileage progressively (roughly 10% per week), adding one quality session (intervals or tempo), and running most miles easy — the "80/20" principle where 80% of running is comfortably easy, 20% is harder quality work. Consistency beats intensity for endurance development.
\nStrength training, plyometrics, and adequate sleep and recovery directly improve running economy — the efficiency with which you consume oxygen at a given pace. Cadence work (aiming for 170-180 steps per minute), improved form, and controlled effort windows all shave seconds per mile over time.
\nPrevent injuries that steal pace: build gradually, respect pain, replace shoes appropriately (roughly every 300-500 miles), and prioritize recovery days. A healthy runner who trains consistently will outpace an aggressive runner who trains inconsistently due to injuries — pace gains are a long-game outcome.`,

    },
  ],

  faqs: [
    { question: "What is a good running pace for a beginner?", answer: "There is no universal 'good' pace — it depends on age, conditioning, and distance. Comfortably conversational paces of 10-12 minutes per mile are typical starting points for beginners; the right pace is the one you can sustain for the full distance with consistent effort regardless of the number." },
    { question: "How do I convert pace to speed?", answer: "Speed in miles per hour = 60 ÷ pace in minutes per mile. A 9:00 pace is 6.7 mph; an 8:00 pace is 7.5 mph. For kilometers per hour, use 60 ÷ (pace minutes per km). The calculator performs this conversion in either direction." },
    { question: "What pace do I need to run a certain half marathon time?", answer: "Divide the target finish time in minutes by 13.1 (miles). For a 2:00:00 half (120 min): 120 ÷ 13.1 = 9:10 per mile. The calculator does this in reverse too — enter a pace to see the projected finish time." },
    { question: "How much faster should my 5K pace be than my marathon pace?", answer: "A quality 5K pace is typically 10-15% faster than marathon pace. A runner with a 7:00 5K pace might sustain 8:00-8:10 per mile for a marathon. The gap varies by distance, training, and physiology; use race-pace calculators to estimate your equivalent performances across distances." },
    { question: "Is pacing by effort better than pacing by numbers?", answer: "Numbers give precision, but effort guides you when conditions change. Use heart rate and pace as tools during training; on race day, allow for temperature, hills, and nerves. Many experienced runners race slightly negative splits — starting a touch conservative — rather than running even splits, as pacing error is more forgiving when you finish strong." },
  ],

  conclusion: `Pace links effort to outcome — it is the number with which every runner plans, races, and improves. Use this calculator to convert between pace, speed, distance, and time, translate goal finish times into required paces, and standardize your workout intensities. Pair steady pacing with consistent mileage, quality sessions, and recovery, and watch the seconds — then the minutes — come off every distance.`,
},

};