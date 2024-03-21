import { useFilterContext } from "@/context/FilterContext";

import {
  getAnnuallyExpensesByCategory,
  getAnnuallySourceOfIncome,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

import { CardsStats } from "@/components/layout/card-stats";
import { SimplePieChart } from "@/components/charts/simple-pie-chart";
import { SimpleBarChart } from "../charts/simple-bar-chart";

import data from "@/assets/data.json";

export default function YearlyReports() {
  const { year: selectedYear } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  const sourcesOfIncome = getAnnuallySourceOfIncome(
    normalizedData,
    selectedYear
  );

  const expenses = getAnnuallyExpensesByCategory(normalizedData, selectedYear);

  return (
    <div className="flex flex-row px-4 gap-4">
      <CardsStats title={`Source of income in ${selectedYear}`}>
        <div className="h-[300px] w-[350px]">
          <SimplePieChart data={sourcesOfIncome} type="pie" />
        </div>
      </CardsStats>
      <CardsStats title={`Annually Expenses By Category in ${selectedYear}`}>
        <div className="h-[300px] w-[600px]">
          <SimpleBarChart data={expenses} />
        </div>
      </CardsStats>
    </div>
  );
}
