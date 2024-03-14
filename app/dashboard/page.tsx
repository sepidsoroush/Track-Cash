import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

import data from "@/assets/data.json";
import {
  // monthlyExpensePerCategory,
  // annuallyExpensePerCategory,
  // totalAnnuallyExpense,
  // monthlyIncomePerSource,
  // annuallyIncomePerSource,
  // totalAnnuallyIncome,
  expensesPerCategoryAllMonths,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";
import { CardsStats } from "@/components/stats/card-stats";
import { ReportSelection } from "@/components/dashboard/report-selection";
import { YearSelection } from "@/components/dashboard/year-selection";
import { MonthSelection } from "@/components/dashboard/month-selection";
import { CategorySelection } from "@/components/dashboard/category-selection";

export default function DashboardPage() {
  const normalizedData = normalizeTransactions(data);

  const expensesPerCategory = expensesPerCategoryAllMonths(
    normalizedData,
    "2023",
    "Subscriptions"
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-start text-4xl">
      <nav className="flex flex-col items-start justify-start p-4  w-full">
        <div className="flex flex-row gap-4">
          <YearSelection />
          <MonthSelection />
          <CategorySelection />
        </div>

        <ReportSelection />
      </nav>
      <CardsStats
        data={expensesPerCategory}
        title="Expenses Per Category All Months"
      />
      {/* <p>
        monthlyExpensePerCategory:{" "}
        {monthlyExpensePerCategory(
          normalizedData,
          "2023",
          "12",
          "Subscriptions"
        )}
      </p>
      <p>
        annuallyExpensePerCategory:{" "}
        {annuallyExpensePerCategory(normalizedData, "2023", "Subscriptions")}
      </p>
      <p>
        totalAnnuallyExpense: {totalAnnuallyExpense(normalizedData, "2023")}
      </p>
      <hr />
      <p>
        monthlyIncomePerSource:{" "}
        {monthlyIncomePerSource(normalizedData, "2023", "12", "Freelance")}
      </p>
      <p>
        annuallyIncomePerSource:{" "}
        {annuallyIncomePerSource(normalizedData, "2023", "Freelance")}
      </p>
      <p>totalAnnuallyIncome: {totalAnnuallyIncome(normalizedData, "2023")}</p> */}
    </div>
  );
}
