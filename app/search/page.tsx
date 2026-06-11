import type { Metadata } from "next";
import SearchResults from "@/components/ui/SearchResults";

export const metadata: Metadata = {
  title:       "Search Calculators",
  description: "Search all 46+ free online calculators on USCalculator.net.",
  robots:      { index: false, follow: true },
};

export default function SearchPage() {
  return <SearchResults />;
}
