"use client";

import { useFilterContext } from "@/context/FilterContext";

import {
  // expensesPerCategoryAllMonths,
  monthlySourceOfIncome,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

import { CardsStats } from "@/components/layout/card-stats";
// import { SimpleLineChart } from "@/components/charts/simple-line-chart";
// import { SimpleBarChart } from "../charts/simple-bar-chart";
import { SimplePieChart } from "../charts/simple-pie-chart";

import data from "@/assets/data.json";

export default function MonthlyReports() {
  const { year: selectedYear, month: selectedMonth } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  // const expensesPerCategory = expensesPerCategoryAllMonths(
  //   normalizedData,
  //   selectedYear,
  //   selectedCategory
  // );

  const sourcesOfIncome = monthlySourceOfIncome(
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
      {/* <CardsStats title="Expenses Per Category All Months">
        <div className="h-[300px] w-[500px]">
          <SimpleBarChart data={expensesPerCategory} />
        </div>
      </CardsStats> */}
    </div>
  );
}
