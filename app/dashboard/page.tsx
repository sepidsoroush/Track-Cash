import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

import data from "@/assets/data.json";
import {
  monthlyExpensePerCategory,
  annuallyExpensePerCategory,
  totalAnnuallyExpense,
  monthlyIncomePerSource,
  annuallyIncomePerSource,
  totalAnnuallyIncome,
} from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

export default function DashboardPage() {
  const normalizedData = normalizeTransactions(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-4xl">
      Dashboard page
      <p>
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
      <p>totalAnnuallyIncome: {totalAnnuallyIncome(normalizedData, "2023")}</p>
    </div>
  );
}
