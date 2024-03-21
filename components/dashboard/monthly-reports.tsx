"use client";

import { useFilterContext } from "@/context/FilterContext";

import {
  getMonthlyExpensesByCategory,
  monthlySourceOfIncome,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

import { CardsStats } from "@/components/layout/card-stats";
import { SimpleBarChart } from "../charts/simple-bar-chart";
import { SimplePieChart } from "../charts/simple-pie-chart";

import data from "@/assets/data.json";

export default function MonthlyReports() {
  const { year: selectedYear, month: selectedMonth } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  const sourcesOfIncome = monthlySourceOfIncome(
    normalizedData,
    selectedYear,
    selectedMonth.value
  );

  const expenses = getMonthlyExpensesByCategory(
    normalizedData,
    selectedYear,
    selectedMonth.value
  );

  return (
    <div className="flex flex-row px-4 gap-4">
      <CardsStats
        title={`Source of income in ${selectedMonth.title} ${selectedYear}`}
      >
        {/* <div className="h-[300px] w-[500px]">
          <SimpleLineChart data={expensesPerCategory} />
        </div> */}
        <div className="h-[300px] w-[300px]">
          <SimplePieChart data={sourcesOfIncome} type="pie" />
        </div>
      </CardsStats>
      <CardsStats
        title={`Monthly Expenses By Category in ${selectedMonth.title} ${selectedYear}`}
      >
        <div className="h-[300px] w-[600px]">
          <SimpleBarChart data={expenses} />
        </div>
      </CardsStats>
    </div>
  );
}
