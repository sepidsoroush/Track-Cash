"use client";

import { useFilterContext } from "@/context/FilterContext";

import {
  getMonthlyExpensesByCategory,
  getMonthlySourceOfIncome,
  getCategoryExpensesTrend,
  getMonthlySummary,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

import { CardsStats } from "@/components/layout/card-stats";
import { SimpleBarChart } from "../../charts/simple-bar-chart";
import { SimpleLineChart } from "../../charts/simple-line-chart";
import { SimplePieChart } from "../../charts/simple-pie-chart";
import { TwoLevelPieChart } from "../../charts/two-level-pie-chart";

import data from "@/assets/data.json";

export default function MonthlyReports() {
  const {
    year: selectedYear,
    month: selectedMonth,
    category: selectedCategory,
  } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  const monthlySourcesOfIncome = getMonthlySourceOfIncome(
    normalizedData,
    selectedYear,
    selectedMonth.value
  );

  const monthlyExpensesByCategory = getMonthlyExpensesByCategory(
    normalizedData,
    selectedYear,
    selectedMonth.value
  );

  const categoryExpensesTrend = getCategoryExpensesTrend(
    normalizedData,
    selectedYear,
    selectedCategory
  );

  const monthlySummary = getMonthlySummary(
    normalizedData,
    selectedYear,
    selectedMonth.value
  );

  const data01 = monthlySummary.filter((item) => item.name === "Income");
  const data02 = monthlySummary.filter((item) => item.name !== "Income");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row px-4 gap-4">
        <CardsStats
          title={`Monthly Expenses By Category in ${selectedMonth.title} ${selectedYear}`}
        >
          <div className="h-[300px] w-[500px]">
            <SimpleBarChart data={monthlyExpensesByCategory} />
          </div>
        </CardsStats>
        <CardsStats
          title={`Expenses of ${selectedCategory} in ${selectedYear}`}
        >
          <div className="h-[300px] w-[500px]">
            <SimpleLineChart data={categoryExpensesTrend} />
          </div>
        </CardsStats>
      </div>
      <div className="flex flex-row px-4 gap-4">
        <CardsStats
          title={`Source of income in ${selectedMonth.title} ${selectedYear}`}
        >
          <div className="h-[300px] w-[350px]">
            <SimplePieChart data={monthlySourcesOfIncome} type="pie" />
          </div>
        </CardsStats>
        <CardsStats
          title={`Income, Expense , Saving in ${selectedMonth.title} ${selectedYear}`}
        >
          <div className="h-[300px] w-[350px]">
            <TwoLevelPieChart innerData={data01} outerData={data02} />
          </div>
        </CardsStats>
      </div>
    </div>
  );
}
