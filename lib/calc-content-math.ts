// Long-form SEO content for math calculators
// Imported and merged into lib/calc-content.ts by getCalcContent()

import type { CalcContent } from "./calc-content";

export const CONTENT_MATH: Record<string, CalcContent> = {

// ══════════════════════════════════════════════════════════════════
"percent": {
  intro: `Percentages are the most used mathematics in daily life — sales discounts, tax, tips, interest rates, grade calculations, markups, and data everywhere are expressed as "per hundred." Yet the two identical-looking percentage operations are routinely confused: taking a percentage OF a number versus calculating the percentage CHANGE between two numbers. A percentage calculator keeps all of these straight and error-free.
\nConsider how often a subtle error changes money: a 20% off sale is 20% off the original price, but a 20% markup then a 20% discount does not return you to the starting price (it leaves you 4% below it). And "what percent is 80 of 200?" (40%) is a different question from "what is the percent increase from 80 to 200?" (150%). Precision with these operations is a genuine life skill.`,

  sections: [
    {
      heading: "The Three Core Percentage Operations",
      body: `Percentage of a number: part = percent × whole ÷ 100. 15% of 240 is 15 × 240 ÷ 100 = 36. Percentage change: change = (new − old) ÷ old × 100. Going from 80 to 100 is a 25% increase; from 100 to 80, a 20% decrease. Finding what percent one number is of another: percent = part ÷ whole × 100. 50 of 200 is 25%.
\nMixed uses trip people up. A store advertises "40% off $60" — 40% of 60 is 24, so the sale price is $36. Then the register applies a 7% sales tax: 7% of 36 is 2.52, total $38.52. Reversing the order (tax then discount) gives the same result because multiplication commutes — but only for combined percentage-of; percentage-change does not commute, which is why "up 10% then down 10%" nets −1%, not 0%.
\nA 10% increase followed by a 10% decrease: 100 → 110 → 99%. The asymmetry arises because the decrease is taken against the larger base. An appreciation needed to recover a loss is even steeper: a 50% loss requires a 100% gain to break even. Understanding bases is the entire game of accurate percentage work.`,

    },
    {
      heading: "Percentages in Money: Discounts, Growth, and Tips",
      body: `Discount stacking is a frequent source of overestimation. A "30% off" coupon followed by an additional "20% off" does not equal 50% off: the second discount applies to the already-discounted price, producing 44% total off. Running the math correctly prevents expecting a discount that never materializes.
\nPercentage growth figures — investment returns, salary bumps, inflation, population growth — compound when applied repeatedly: 5% growth for 10 years is not 50% total but about 63%, because each year's growth applies to the growing base. This compounding distinction is why "percent of" over multi-step periods requires exponential treatment.
\nTips and tax are straightforward "percent of" applications, but grossing-up (adding tip to a pre-tip bill) versus splitting large bills can trip even practiced calculators: a 20% tip on a $50 bill is $10 (total $60); splitting that total equally means each of two people pays $30, not 20% more of a split share. The calculator resolves the forward and reverse directions reliably.`,

    },
    {
      heading: "Percentages in Data and Grading",
      body: `Percent change is the standard language of statistics, finance, and surveys: GDP growth, market moves, and opinion polls all report relative change from a basis. Interpreting correctly requires knowing the base — a 200% increase means tripling; a 100% increase means doubling; a 0% change means no movement.
\nWeighted percentages, common in grading, combine category weights rather than numbers: if homework is 30% of the grade and exams 70%, a 90% homework average and 75% exam average yield 0.30 × 90 + 0.70 × 75 = 79.5%, not the arithmetic mean 82.5%. Understanding weights prevents mistaken grade predictions.
\nWhen percentages are summed or averaged, ensure the bases are comparable. Averaging "80% increase in one region and 20% in another" is meaningless without knowing the sizes behind each percentage. Converting to absolute quantities first is the standard safeguard.`,

    },
  ],

  faqs: [
    { question: "How do I calculate what percent one number is of another?", answer: "Divide the part by the whole and multiply by 100. To find what percent 60 is of 240: (60 ÷ 240) × 100 = 25%. The result tells you the share that the part represents of the whole." },
    { question: "How do I calculate percentage increase or decrease?", answer: "Subtract the original from the new value, divide by the original, and multiply by 100: ((new − original) ÷ original) × 100. A rise from 50 to 65 is ((65−50) ÷ 50) × 100 = 30%. A fall from 65 to 50 is ((50−65) ÷ 65) × 100 = −23.1%." },
    { question: "Why doesn't 'up 10% then down 10%' equal zero?", answer: "Each percentage applies to the current base. After a 10% rise from 100 to 110, a 10% drop is computed on 110 (losing 11), leaving 99 — a 1% net loss. Percentages do not commute across changes because the base changes each step." },
    { question: "How do I add a percentage to a price or subtract it?", answer: "To add X% to a price, multiply by (1 + X/100): $80 at 8% tax → 80 × 1.08 = $86.40. To apply a discount, multiply by (1 − X/100): $80 with 25% off → 80 × 0.75 = $60. To find the pre-discount price from a discounted total, divide by the factor instead." },
    { question: "What is a percentage point and how is it different from a percent?", answer: "A percentage point is the absolute arithmetic difference between two percentages; a percent change is relative to the starting value. A rise in a tax rate from 4% to 5% is 1 percentage point but a 25% relative increase. Confusing the two misleads in reporting and comparison." },
  ],

  conclusion: `Percentage operations are simple to state and deceptively easy to fumble in the details — bases, ordering, and compounding all matter. Use this calculator to run any of the three core operations with confidence, and cultivate the habit of naming the base before computing: of what? from what? over what period? Precision with percentages pays off in every transaction, budget, and data interpretation from here on.`,
},

// ══════════════════════════════════════════════════════════════════
"fraction": {
  intro: `Fractions — parts of a whole expressed as a numerator over a denominator — are the foundation of basic arithmetic and appear constantly in real life: cooking measurements (1/2 cup), woodworking (3/8 inch), time (1/4 hour), and money (1/4 = 25 cents = 25%). A fraction calculator performs addition, subtraction, multiplication, and division with proper steps, including mixed numbers, keeping the results exact.
\nMastering fractions means mastering the few underlying rules, not memorizing results. The four operations each follow a distinct logic — common denominators for adding, simple multiplication and division by inversion. That logic, applied consistently, handles everything from simple halves to complex mixed-number arithmetic.`,

  sections: [
    {
      heading: "Adding and Subtracting Fractions",
      body: `Adding fractions requires a common denominator. To add 1/3 + 1/4, convert both to twelfths: 4/12 + 3/12 = 7/12. Any common denominator works, but the least common multiple (here 12) keeps the result simplest. Subtraction follows the same rule: 3/4 − 1/3 = 9/12 − 4/12 = 5/12.
\nWhen adding mixed numbers (whole + fraction, like 2 1/3), you can add the whole parts and fraction parts separately, carrying over when the fraction sums to a whole: 2 1/3 + 1 2/3 = 3 3/3 = 4. Alternatively convert to improper fractions first — 2 1/3 = 7/3, 1 2/3 = 5/3, sum 12/3 = 4.
\nPractice with real fractions makes the rule stick: measuring 1/2 cup plus 1/3 cup of an ingredient requires the same common-denominator logic (3/6 + 2/6 = 5/6 cup) that formal fraction addition uses.`,

    },
    {
      heading: "Multiplying and Dividing Fractions",
      body: `Multiplication is straightforward: multiply numerators and denominators across: (2/3) × (4/5) = (2×4)/(3×5) = 8/15. Cross-cancelling (dividing a numerator and denominator by a common factor before multiplying) keeps numbers smaller: (2/3) × (6/7) can cancel 3 and 6, giving (2/1) × (2/7) = 4/7.
\nDivision has one rule that surprises learners: flip the second fraction and multiply. (5/6) ÷ (2/3) becomes (5/6) × (3/2) = 15/12 = 5/4. Dividing by a fraction is multiplication by its reciprocal — because dividing by an amount is asking "how many of it fit," which multiplies the number of parts.
\nMixed numbers must convert to improper fractions before multiplying or dividing: 1 1/2 × 2/3 = (3/2) × (2/3) = 1. Converting, computing, and simplifying back ensures exact answers, which is precisely what this calculator performs step by step.`,

    },
    {
      heading: "Simplifying, Mixed Numbers, and Translation to Decimals",
      body: `Every fraction should be simplified to lowest terms: divide numerator and denominator by their greatest common divisor. 8/12 simplifies to 2/3 (divide by 4). Simplified forms are easier to compare — 2/3 and 5/8 (or 16/24 and 15/24) become clearly ordered once represented with a common denominator.
\nImproper fractions (numerator ≥ denominator) can remain as-is in math, but everyday uses prefer mixed numbers: 9/4 = 2 1/4. Converting requires dividing numerator by denominator for the whole part and keeping the remainder as the fraction.
\nTranslating fractions to decimals (numerator ÷ denominator) links the two number systems: 3/4 = 0.75, and percentages follow by multiplying the decimal by 100: 0.75 = 75%. The reverse — a decimal like 0.6 as a fraction — requires writing it over the appropriate power of ten (6/10 = 3/5).`,

    },
  ],

  faqs: [
    { question: "How do I add fractions with different denominators?", answer: "Find a common denominator — ideally the least common multiple of the two denominators — convert each fraction to that denominator, then add the numerators. Example: 1/3 + 1/4 → 4/12 + 3/12 = 7/12. Simplify the result if possible." },
    { question: "How do I divide fractions?", answer: "Keep the first fraction, change the division to multiplication, and flip (take the reciprocal of) the second fraction: (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6. Then simplify the result to lowest terms." },
    { question: "What is a mixed number and how do I convert it?", answer: "A mixed number combines a whole number with a fraction, like 2 3/4. To convert to an improper fraction: multiply the whole part by the denominator and add the numerator, over the same denominator — 2 3/4 = (2×4+3)/4 = 11/4. Convert back by dividing numerator by denominator, keeping the remainder as the fraction." },
    { question: "How do I turn a fraction into a percentage?", answer: "Divide the numerator by the denominator to get a decimal, then multiply by 100. 3/4 = 0.75 = 75%. The percentage represents the fraction as parts per hundred — 3/4 is 75 parts out of 100 in equivalent form." },
    { question: "Why do I need a common denominator to add fractions but not to multiply them?", answer: "Adding counts parts of the same-sized whole, so parts must be measured in equal units (same denominator). Multiplication creates a new unit from two different units, so denominators simply multiply without matching. Division, being multiplication by the reciprocal, also needs no common denominator." },
  ],

  conclusion: `Fractions look intimidating but obey just a few dependable rules: common denominators for addition and subtraction, direct multiplication, and invert-and-multiply for division. Use this calculator to check your arithmetic from simple halves through mixed numbers, and let it reinforce the pattern behind each operation. Once the rules are internalized, fractions stop being a memory exercise and become the reliable arithmetic of halves, quarters, and thirds that everyday life constantly requires.`,
},

// ══════════════════════════════════════════════════════════════════
"random": {
  intro: `Randomness is a formal, measurable property — not a synonym for "unpredictable enough." A random number generator produces sequences in which every value in a specified range is equally likely on each draw, and past draws do not influence future ones. The device in your phone, a dice roll, or a lottery drawing all draw from controlled randomness, and a calculator-based generator puts that power in a simple, repeatable tool.
\nRandom numbers appear in everyday contexts beyond gambling: picking a winner in a giveaway, assigning teams, selecting survey participants, generating passwords (combined with your password generator), simulating data, and making unbiased choices. Correctly understanding and using random numbers prevents the biases that human "randomness" always contains — people systematically avoid repeats and cluster choices.`,

  sections: [
    {
      heading: "How Random Numbers Are Generated",
      body: `Computers generate randomness in two ways. Pseudo-random generators (PRNGs) use a mathematical algorithm and a "seed": given the same seed, the same sequence is produced, which is useful for testing and reproducibility. Cryptographically secure generators (CSPRNGs) draw from genuinely unpredictable system entropy — mouse movements, hardware noise — making them appropriate for security and passwords.
\nFor most everyday uses — random draws, simulations, games — a standard PRNG is sufficient. The generator produces a value uniformly distributed across the requested range: specifying 1-10 means each integer from 1 through 10 has exactly a 1/10 probability. Uniformity, not apparent randomness, is the mathematical requirement.
\nOne common misconception: patterns break randomness. A fair coin that has landed heads five times in a row is just as likely to land heads again — the probability of each individual flip remains 50%. The "gambler's fallacy" (expecting tails to be "due") is simply a misunderstanding of independence.`,

    },
    {
      heading: "Practical Uses of Random Numbers",
      body: `Fair decision-making is the most common use: raffle winners, team selection, order shuffling, and choosing among equal options all benefit from a verifiably unbiased draw. For weighted selection — where one option should win more often — many generators support weighted probabilities, distributing wins proportionally.
\nIn data and testing, random numbers create samples, split datasets into training and validation groups, and generate synthetic values for simulations. Uniform random floats (e.g., between 0 and 1) underpin Monte Carlo methods used across finance, engineering, and science.
\nGame and content contexts use seeded randomness to replay maps or shuffle decks deterministically. Reproducibility matters when the same "random" sequence must regenerate for a session — a property achievable with a fixed seed but impossible (and undesirable in gambling) with cryptographic randomness.`,

    },
    {
      heading: "Randomness, Probability, and Fairness",
      body: `Uniform random number generation faithfully models probabilities: rolling a fair six-sided die thousands of times yields each face close to one-sixth of the total, with deviations shrinking as trials increase — the law of large numbers. Long sequences drift toward theoretical probabilities even as short runs look uneven.
\nAvoiding patterns is not required for randomness; it actively fights it. True random sequences contain runs, repeats, and clusters that look suspicious but are exactly what independence produces. Preserving the generator's output rather than "fixing" apparent patterns keeps it statistically valid.
\nFor fairness-sensitive applications — lotteries, giveaways, raffles with real stakes — cryptographic randomness removes any possibility of prediction or manipulation. If humans might bet on or audit the result, use a CSPRNG and document the generation process. For everyday uses, the standard generator is more than adequate.`,

    },
  ],

  faqs: [
    { question: "Can a computer produce truly random numbers?", answer: "Standard generators are pseudo-random — deterministic algorithms with random-looking output — which is fine for most uses. Cryptographic generators draw from hardware entropy sources (thermal noise, timing jitter) to produce numbers that are not practically predictable, which is what security applications require." },
    { question: "Is the same number twice in a row 'wrong'?", answer: "No. With each draw independent and equally likely, repeats are normal and expected. Rolling a 3 twice in a row on a fair die is a 1/36 event that happens routinely. Samples that avoid repeats are actually biased and not uniformly random." },
    { question: "How do I pick a random winner fairly?", answer: "Generate a number in the range 1 to N (the number of entries) using a uniform generator, with a cryptographically secure source if the stakes are meaningful. Assign each entry a number sequentially and match the winning number to its entry without re-shuffling." },
    { question: "What is the seed in a random number generator?", answer: "The seed is the initial input to a pseudo-random algorithm that determines the entire output sequence. The same seed reproduces the same sequence, enabling tests and reproducible simulations; different seeds (or time-based seeds) produce different, unpredictable-looking sequences." },
    { question: "Can I generate a random number excluding some values?", answer: "Yes — generate within the valid range and re-draw on excluded values (rejection sampling), or build a list of allowed values and index it with a random integer. Both preserve uniform probability over the allowed outcomes." },
  ],

  conclusion: `Randomness is a precise concept with precise tools. Use this generator for unbiased draws, simulations, and decision support — and respect the two properties that define correctness: each outcome is equally likely, and each draw is independent of the last. Let the tool be the judge you cannot be, because human intuition is precisely what random number generation exists to replace.`,
},

// ══════════════════════════════════════════════════════════════════
"triangle": {
  intro: `Triangles are the fundamental building block of geometry — every polygon is just triangles arranged, and practically every measurement in construction, navigation, engineering, and design distills to solving one. A triangle calculator finds the missing sides and angles from the pieces you know, using the core relationships that govern all triangles: angle sum, the law of sines, the law of cosines, and the Pythagorean theorem for right triangles.
\nMaster the logic of triangle solving and you can work in any application: laying out a roof pitch, estimating the height of a building from its shadow, or calculating a diagonal brace's length. The patterns repeat — the calculator simply executes the standard solving procedures instantly and precisely.`,

  sections: [
    {
      heading: "The Essentials: Angles, Sides, and the Pythagorean Theorem",
      body: `Every triangle has three angles that always sum to 180 degrees, which immediately solves the third angle when two are known. Side and angle relationships then fill in the rest. For right triangles, the Pythagorean theorem (a² + b² = c²) relates the two legs to the hypotenuse — a 3-4-5 triangle gives a hypotenuse of 5, and any right triangle's hypotenuse is the square root of the sum of leg squares.
\nRight-triangle trigonometry goes further: sine(angle) = opposite ÷ hypotenuse, cosine = adjacent ÷ hypotenuse, tangent = opposite ÷ adjacent. Given one side and one angle, SOH-CAH-TOA solves the remaining sides. These functions also work in reverse — given sides, find angles via inverse functions.
\nNon-right triangles need more general tools: the law of cosines, c² = a² + b² − 2ab·cos(C), solves triangles given two sides and their included angle or all three sides; the law of sines, a/sin(A) = b/sin(B) = c/sin(C), solves given two angles and a side. The calculator applies all of these automatically based on what you provide.`,

    },
    {
      heading: "Classifying Triangles and Their Properties",
      body: `By angles, triangles are acute (all angles < 90°), right (one 90° angle), or obtuse (one angle > 90°). By sides, they are scalene (all sides different), isosceles (two equal sides, two equal angles), or equilateral (all sides and angles equal at 60°). These classifications determine which formulas apply most simply.
\nKey properties aid everyday solving: the area is ½ × base × height, but for any triangle given two sides and the included angle, area = ½ × a × b × sin(C) — Heron's formula (from three sides) also works: area = √(s(s−a)(s−b)(s−c)) where s is the semi-perimeter. The calculator can report area from the sides you enter.
\nHeight and base relationships give rise to practical measurement tricks: a 30-60-90 triangle has side ratios 1 : √3 : 2 and a 45-45-90 triangle 1 : 1 : √2. Recognizing these triangles in construction layouts and geometry problems makes many calculations trivial.`,

    },
    {
      heading: "Real-World Triangle Solving",
      body: `Construction constantly uses triangles: rafter lengths from roof pitch, diagonal bracing sizing, and layout squaring via the 3-4-5 method. Given the rise and run of a slope, the hypotenuse is the actual member length — the same Pythagorean logic used for stair stringers and sloped floors.
\nNavigation and surveying determine distances to inaccessible points by angle-of-elevation methods: measure the distance to a landmark and the angle up to its peak, and tangent solves its height. Two-point triangulation — measuring from two known stations — locates objects via the law of sines.
\nDesigners and engineers rely on triangulation for structural stability: triangles distribute load without deforming, which is why roofs, bridges, and bicycle frames repeat them. Understanding how sides and angles interrelate turns those designs — from trusses to shelf installs — into calculable problems rather than guesses.`,

    },
  ],

  faqs: [
    { question: "How do I find the missing angle of a triangle?", answer: "Angles in any triangle sum to 180°. Subtract the two known angles from 180 to find the third. If you know angles in ratios instead (e.g., 1:2:3), divide 180 by the sum of the ratio parts and multiply each ratio by the result." },
    { question: "How do I find the hypotenuse of a right triangle?", answer: "Square both legs, add them, and take the square root: hypotenuse = √(a² + b²). A triangle with legs 6 and 8 has a hypotenuse of √(36 + 64) = 10. The converse helps you verify right angles with the 3-4-5 check." },
    { question: "What is the area of a triangle?", answer: "Half the base times the height: area = ½ × base × height. For any triangle given two sides and the included angle, use ½ × a × b × sin(C). Given only three sides, Heron's formula applies: with semi-perimeter s, area = √(s(s−a)(s−b)(s−c))." },
    { question: "When do I use the law of sines versus the law of cosines?", answer: "The law of sines (a/sin A = b/sin B = c/sin C) fits when you know two angles and a side, or two sides and a non-included angle. The law of cosines (c² = a² + b² − 2ab·cos C) fits when you know two sides and their included angle, or all three sides. This calculator selects the correct method from your inputs." },
    { question: "Can I solve a triangle from just three sides?", answer: "Yes — three sides uniquely determine a triangle (SSS). Use the law of cosines to find the angles: cos(C) = (a² + b² − c²) ÷ (2ab), and repeat for the other angles. Triangle inequality ensures a solution exists only if each side is shorter than the sum of the other two." },
  ],

  conclusion: `Triangle solving is the algebra of shapes in the real world. Whether you need side lengths, angles, area, or height, the three core tools — angle sum, the Pythagorean theorem, and the sine/cosine laws — cover every case. Use this calculator to execute those methods instantly on your dimensions, keep the core relationships in mind, and you will convert measurements, plans, and layouts into precise numbers wherever triangles appear.`,
},

// ══════════════════════════════════════════════════════════════════
"stddev": {
  intro: `Standard deviation is the single most informative number in statistics — it measures how spread out a set of values is around their mean. It is why a classroom average hides the difference between a class where everyone scores 80 (low deviation) and one where scores range from 40 to 120 (high deviation). This calculator computes the mean, variance, and standard deviation for any data set, in both population and sample forms.
\nUnderstanding standard deviation unlocks data literacy: quality control charts, stock market volatility, test result distributions, and the "68-95-99.7 rule" of normal distributions all rest on it. Whether you are a student, a data analyst, or just someone interpreting charts, standard deviation tells you how much trust to place in an average.`,

  sections: [
    {
      heading: "What Standard Deviation Measures",
      body: `Variance is the average of the squared differences from the mean; standard deviation is the square root of variance, returning the measurement to the original units. If test scores average 75 with a standard deviation of 10, most scores fall within 65-85 — tightly grouped — while a deviation of 30 signals enormous spread, with meaningful numbers below 45 and above 105.
\nIn a bell-shaped (normal) distribution, the empirical rule applies: about 68% of values lie within one standard deviation of the mean, 95% within two, and 99.7% within three. IQ scores (mean 100, standard deviation 15), heights, and measurement errors all approximate this pattern, making the rule unexpectedly useful for sanity-checking data.
\nStandard deviation is unit-sensitive by design: comparing deviations across different units (dollars vs. percent) can mislead, which is why analysts often use the coefficient of variation (standard deviation ÷ mean) for comparisons. Within one data set, however, it is the gold-standard spread measure.`,

    },
    {
      heading: "Population vs. Sample: Which One Do You Need?",
      body: `The distinction hinges on whether your data is the complete set or a sample of a larger set. Population standard deviation divides squared deviations by N — correct when measuring every member (all students in one class, all products in a batch). Sample standard deviation divides by N−1 (called Bessel's correction), estimating the population's spread from a subset and avoiding under-estimation.
\nWhy subtract one? A sample is typically more tightly clustered around its own mean than the true population mean, so N−1 compensates, making the sample deviation an unbiased estimate of the population value. As sample size grows, the difference between N and N−1 shrinks toward irrelevance.
\nResearch and quality work almost always use sample standard deviation (dividing by N−1) because data sets are partial observations. When a data set is a complete census of interest, population deviation is appropriate. The calculator offers both and clearly labels which is computed.`,

    },
    {
      heading: "Interpreting Standard Deviation in Real Data",
      body: `In finance, standard deviation quantifies risk: a fund with higher standard deviation of returns swings more widely — potentially higher gains and deeper losses. Comparing two funds' standard deviations at equal returns reveals which is smoother. Investors routinely screen for deviation levels aligned with their risk tolerance.
\nIn manufacturing and quality control, deviation from specifications triggers process adjustments via control charts; a measurement consistently more than three standard deviations from the mean signals an out-of-control process. In grading, deviation tells an educator how effectively the class material landed — and where to reteach.
\nIn diagnostics and medicine, reference ranges (lab values, growth charts) are built around means ± deviations. Understanding that a value two deviations above the mean is unusual — falling outside 95% of the population — gives the "how surprising is this" context that averages alone never provide.`,

    },
  ],

  faqs: [
    { question: "What is the difference between variance and standard deviation?", answer: "Variance is the average of squared deviations from the mean; standard deviation is its square root. Standard deviation returns to the original units of the data, so it is directly interpretable, while variance, being squared units, is mostly a stepping stone to standard deviation." },
    { question: "When should I use sample versus population standard deviation?", answer: "Use population deviation (divide by N) when your data covers every member of the group you are studying — a complete class, batch, or census. Use sample deviation (divide by N−1) when your data is a sample estimating a larger population, which is the standard case in research and quality control." },
    { question: "What does a large standard deviation mean?", answer: "It means the values are spread widely around the mean — the average is a poor summary of individual values. A small deviation means values cluster close to the mean and the average represents them well. Context determines whether a given deviation is 'large.'" },
    { question: "What is the 68-95-99.7 rule?", answer: "For normally distributed data, roughly 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. This rule lets you estimate the spread of typical data from a standard deviation without needing raw values." },
    { question: "Can standard deviation be negative?", answer: "No. Variance is an average of squared values (hence non-negative), and standard deviation is its square root, so it is always zero or positive. A standard deviation of zero means every value in the set is identical — no spread at all." },
  ],

  conclusion: `An average without a standard deviation tells you only half of the story — where the data centers, but not how much it varies. Use this calculator to compute the mean, variance, and the right flavor of standard deviation for your data, understand the 68-95-99.7 rule, and interpret spread in context. From classroom grades to market volatility, the number you add to the average is the number that reveals how much that average is actually worth.`,
},

};