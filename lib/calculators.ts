// All calculator metadata — single source of truth

export interface Calculator {
  id:          string;
  slug:        string;
  name:        string;
  shortName:   string;
  description: string;
  category:    CategoryId;
  icon:        string;
  featured:    boolean;
  keywords:    string[];
}

export type CategoryId = "financial" | "fitness" | "math" | "other";

export interface Category {
  id:          CategoryId;
  name:        string;
  description: string;
  icon:        string;
  color:       string;
  bgColor:     string;
}

export const CATEGORIES: Category[] = [
  {
    id:          "financial",
    name:        "Financial",
    description: "Loans, mortgages, taxes, investments, and retirement planning.",
    icon:        "💰",
    color:       "text-brand-blue",
    bgColor:     "bg-blue-50",
  },
  {
    id:          "fitness",
    name:        "Fitness & Health",
    description: "BMI, calories, body fat, pregnancy, and pace calculators.",
    icon:        "🏃",
    color:       "text-emerald-700",
    bgColor:     "bg-emerald-50",
  },
  {
    id:          "math",
    name:        "Math",
    description: "Fractions, percentages, statistics, and geometry.",
    icon:        "📐",
    color:       "text-violet-700",
    bgColor:     "bg-violet-50",
  },
  {
    id:          "other",
    name:        "Other",
    description: "Age, date, time, GPA, conversion, and more.",
    icon:        "🔧",
    color:       "text-brand-orange-dark",
    bgColor:     "bg-orange-50",
  },
];

export const CALCULATORS: Calculator[] = [
  // ── Financial ──────────────────────────────────────────
  {
    id: "mortgage", slug: "mortgage-calculator", name: "Mortgage Calculator",
    shortName: "Mortgage", category: "financial", icon: "🏠", featured: true,
    description: "Calculate your monthly mortgage payment including principal, interest, taxes, and insurance.",
    keywords: ["mortgage","home loan","monthly payment","house payment","piti"],
  },
  {
    id: "loan", slug: "loan-calculator", name: "Loan Calculator",
    shortName: "Loan", category: "financial", icon: "💳", featured: true,
    description: "Find your monthly payment, total interest, and payoff schedule for any loan.",
    keywords: ["loan","personal loan","borrow","payment"],
  },
  {
    id: "auto", slug: "auto-loan-calculator", name: "Auto Loan Calculator",
    shortName: "Auto Loan", category: "financial", icon: "🚗", featured: false,
    description: "Calculate car loan payments with tax, trade-in, and down payment options.",
    keywords: ["auto loan","car payment","vehicle financing"],
  },
  {
    id: "compound", slug: "compound-interest-calculator", name: "Compound Interest Calculator",
    shortName: "Compound Interest", category: "financial", icon: "📈", featured: true,
    description: "See how your savings grow over time with compound interest.",
    keywords: ["compound interest","savings","investment growth"],
  },
  {
    id: "investment", slug: "investment-calculator", name: "Investment Calculator",
    shortName: "Investment", category: "financial", icon: "📊", featured: false,
    description: "Project investment returns with inflation adjustment and monthly contributions.",
    keywords: ["investment","portfolio","returns","roi"],
  },
  {
    id: "retirement", slug: "retirement-calculator", name: "Retirement Calculator",
    shortName: "Retirement", category: "financial", icon: "🏖️", featured: false,
    description: "Plan your retirement savings and see how much you'll have at retirement age.",
    keywords: ["retirement","401k","pension","savings"],
  },
  {
    id: "amortization", slug: "amortization-calculator", name: "Amortization Calculator",
    shortName: "Amortization", category: "financial", icon: "📋", featured: false,
    description: "View a full loan amortization schedule with month-by-month breakdown.",
    keywords: ["amortization","loan schedule","principal","interest"],
  },
  {
    id: "interest", slug: "interest-calculator", name: "Interest Calculator",
    shortName: "Interest", category: "financial", icon: "💹", featured: false,
    description: "Calculate simple or compound interest on any principal amount.",
    keywords: ["interest","simple interest","compound"],
  },
  {
    id: "payment", slug: "payment-calculator", name: "Payment Calculator",
    shortName: "Payment", category: "financial", icon: "💸", featured: false,
    description: "Calculate monthly, bi-weekly, or weekly payments for any debt.",
    keywords: ["payment","monthly payment","debt"],
  },
  {
    id: "salary", slug: "salary-calculator", name: "Salary Calculator",
    shortName: "Salary", category: "financial", icon: "💼", featured: false,
    description: "Convert salary between annual, monthly, weekly, and hourly rates.",
    keywords: ["salary","hourly wage","annual income","pay"],
  },
  {
    id: "tax", slug: "income-tax-calculator", name: "Income Tax Calculator",
    shortName: "Income Tax", category: "financial", icon: "🧾", featured: true,
    description: "Estimate your US federal income tax for 2024 with bracket breakdown.",
    keywords: ["income tax","federal tax","tax bracket","irs"],
  },
  {
    id: "salestax", slug: "sales-tax-calculator", name: "Sales Tax Calculator",
    shortName: "Sales Tax", category: "financial", icon: "🛒", featured: false,
    description: "Calculate the final price after adding sales tax to any amount.",
    keywords: ["sales tax","vat","gst","price"],
  },
  {
    id: "inflation", slug: "inflation-calculator", name: "Inflation Calculator",
    shortName: "Inflation", category: "financial", icon: "📉", featured: false,
    description: "Find out how inflation affects the purchasing power of money over time.",
    keywords: ["inflation","purchasing power","cpi","cost of living"],
  },
  {
    id: "finance", slug: "finance-calculator", name: "Finance Calculator",
    shortName: "Finance", category: "financial", icon: "🏦", featured: false,
    description: "Solve for present value, future value, interest rate, or number of periods.",
    keywords: ["finance","tvm","present value","future value","fv","pv"],
  },
  {
    id: "interest-rate", slug: "interest-rate-calculator", name: "Interest Rate Calculator",
    shortName: "Interest Rate", category: "financial", icon: "🔢", featured: false,
    description: "Find the interest rate on a loan given the payment, term, and principal.",
    keywords: ["interest rate","apr","find rate"],
  },
  // ── Fitness ────────────────────────────────────────────
  {
    id: "bmi", slug: "bmi-calculator", name: "BMI Calculator",
    shortName: "BMI", category: "fitness", icon: "⚖️", featured: true,
    description: "Calculate your Body Mass Index and find out your weight category.",
    keywords: ["bmi","body mass index","overweight","underweight","obesity"],
  },
  {
    id: "calorie", slug: "calorie-calculator", name: "Calorie Calculator",
    shortName: "Calorie", category: "fitness", icon: "🍎", featured: true,
    description: "Find your daily calorie needs based on age, weight, height, and activity level.",
    keywords: ["calorie","tdee","bmr","diet","weight loss"],
  },
  {
    id: "bodyfat", slug: "body-fat-calculator", name: "Body Fat Calculator",
    shortName: "Body Fat", category: "fitness", icon: "🏋️", featured: false,
    description: "Estimate your body fat percentage using the US Navy method.",
    keywords: ["body fat","body composition","navy method"],
  },
  {
    id: "bmr", slug: "bmr-calculator", name: "BMR Calculator",
    shortName: "BMR", category: "fitness", icon: "🔥", featured: false,
    description: "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation.",
    keywords: ["bmr","basal metabolic rate","metabolism","calories burned"],
  },
  {
    id: "idealweight", slug: "ideal-weight-calculator", name: "Ideal Weight Calculator",
    shortName: "Ideal Weight", category: "fitness", icon: "🎯", featured: false,
    description: "Find your ideal weight range based on your height and gender.",
    keywords: ["ideal weight","healthy weight","target weight"],
  },
  {
    id: "pregnancy", slug: "pregnancy-calculator", name: "Pregnancy Calculator",
    shortName: "Pregnancy", category: "fitness", icon: "🤰", featured: false,
    description: "Find your due date and track your pregnancy week by week.",
    keywords: ["pregnancy","due date","lmp","trimester"],
  },
  {
    id: "due-date", slug: "due-date-calculator", name: "Due Date Calculator",
    shortName: "Due Date", category: "fitness", icon: "📅", featured: false,
    description: "Calculate your baby's due date from your last menstrual period.",
    keywords: ["due date","pregnancy","birth","delivery"],
  },
  {
    id: "pace", slug: "pace-calculator", name: "Pace Calculator",
    shortName: "Pace", category: "fitness", icon: "🏃", featured: false,
    description: "Calculate running pace, speed, and finish time for any distance.",
    keywords: ["pace","running","marathon","5k","speed"],
  },
  // ── Math ──────────────────────────────────────────────
  {
    id: "percent", slug: "percentage-calculator", name: "Percentage Calculator",
    shortName: "Percentage", category: "math", icon: "📊", featured: true,
    description: "Calculate percentages, percentage change, and what percent one number is of another.",
    keywords: ["percentage","percent","ratio","proportion"],
  },
  {
    id: "fraction", slug: "fraction-calculator", name: "Fraction Calculator",
    shortName: "Fraction", category: "math", icon: "½", featured: false,
    description: "Add, subtract, multiply, and divide fractions with step-by-step results.",
    keywords: ["fraction","numerator","denominator","mixed number"],
  },
  {
    id: "random", slug: "random-number-generator", name: "Random Number Generator",
    shortName: "Random Number", category: "math", icon: "🎲", featured: false,
    description: "Generate random numbers within any range, with or without duplicates.",
    keywords: ["random number","generator","lottery","dice"],
  },
  {
    id: "triangle", slug: "triangle-calculator", name: "Triangle Calculator",
    shortName: "Triangle", category: "math", icon: "📐", featured: false,
    description: "Solve any triangle — find missing sides and angles using the law of sines and cosines.",
    keywords: ["triangle","geometry","angle","hypotenuse","pythagorean"],
  },
  {
    id: "stddev", slug: "standard-deviation-calculator", name: "Standard Deviation Calculator",
    shortName: "Std Deviation", category: "math", icon: "📉", featured: false,
    description: "Calculate mean, variance, and standard deviation for any data set.",
    keywords: ["standard deviation","statistics","variance","mean","average"],
  },
  // ── Other ─────────────────────────────────────────────
  {
    id: "age", slug: "age-calculator", name: "Age Calculator",
    shortName: "Age", category: "other", icon: "🎂", featured: true,
    description: "Calculate your exact age in years, months, days, hours, and minutes.",
    keywords: ["age","birthday","date of birth","how old"],
  },
  {
    id: "date", slug: "date-calculator", name: "Date Calculator",
    shortName: "Date", category: "other", icon: "🗓️", featured: false,
    description: "Find the number of days between two dates or add/subtract days from a date.",
    keywords: ["date","days between","calendar","deadline"],
  },
  {
    id: "time", slug: "time-calculator", name: "Time Calculator",
    shortName: "Time", category: "other", icon: "⏱️", featured: false,
    description: "Add or subtract hours, minutes, and seconds from any time.",
    keywords: ["time","hours","minutes","seconds","duration"],
  },
  {
    id: "hours", slug: "hours-calculator", name: "Hours Calculator",
    shortName: "Hours", category: "other", icon: "🕐", featured: false,
    description: "Calculate total work hours between start and end times with break deduction.",
    keywords: ["hours","work hours","timesheet","break"],
  },
  {
    id: "gpa", slug: "gpa-calculator", name: "GPA Calculator",
    shortName: "GPA", category: "other", icon: "🎓", featured: false,
    description: "Calculate your weighted GPA by entering your courses, credits, and grades.",
    keywords: ["gpa","grade point average","college","university","grades"],
  },
  {
    id: "grade", slug: "grade-calculator", name: "Grade Calculator",
    shortName: "Grade", category: "other", icon: "📝", featured: false,
    description: "Calculate your final weighted grade from multiple assignments and exams.",
    keywords: ["grade","final grade","weighted average","exam"],
  },
  {
    id: "password", slug: "password-generator", name: "Password Generator",
    shortName: "Password", category: "other", icon: "🔐", featured: false,
    description: "Generate strong, random passwords with custom length and character sets.",
    keywords: ["password","secure","random","generator","strong password"],
  },
  {
    id: "conversion", slug: "conversion-calculator", name: "Conversion Calculator",
    shortName: "Conversion", category: "other", icon: "🔄", featured: false,
    description: "Convert between units of length, weight, temperature, area, volume, and speed.",
    keywords: ["conversion","unit","measurement","convert","metric","imperial"],
  },
  {
    id: "concrete", slug: "concrete-calculator", name: "Concrete Calculator",
    shortName: "Concrete", category: "other", icon: "🏗️", featured: false,
    description: "Calculate the volume of concrete needed for slabs, columns, and footings.",
    keywords: ["concrete","cement","slab","volume","cubic yards","bags"],
  },
  {
    id: "subnet", slug: "subnet-calculator", name: "IP Subnet Calculator",
    shortName: "Subnet", category: "other", icon: "🌐", featured: false,
    description: "Calculate network address, broadcast, host range, and usable IPs for any CIDR block.",
    keywords: ["subnet","ip","network","cidr","mask","networking"],
  },
];

export const FEATURED = CALCULATORS.filter(c => c.featured);

export function getBySlug(slug: string): Calculator | undefined {
  return CALCULATORS.find(c => c.slug === slug);
}

export function getByCategory(cat: CategoryId): Calculator[] {
  return CALCULATORS.filter(c => c.category === cat);
}

export function getCategoryMeta(id: CategoryId): Category {
  return CATEGORIES.find(c => c.id === id)!;
}

// ── JSON-LD Helpers (used in page files) ────────────────────────────────────
const SITE_URL = "https://www.uscalculator.net";

export function buildPageJsonLd(calc: Calculator) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calc.name,
    "url": `${SITE_URL}/${calc.slug}`,
    "description": calc.description,
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": calc.category.charAt(0).toUpperCase() + calc.category.slice(1),
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "USCalculator.net",
      "url": SITE_URL
    },
    "keywords": calc.keywords.join(", "),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#calc-title", "h1"]
    }
  };
}

export function buildBreadcrumbJsonLd(calc: Calculator) {
  const catMeta = getCategoryMeta(calc.category);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",               "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": catMeta.name,          "item": `${SITE_URL}/#${calc.category}` },
      { "@type": "ListItem", "position": 3, "name": calc.name,             "item": `${SITE_URL}/${calc.slug}` },
    ],
  };
}
