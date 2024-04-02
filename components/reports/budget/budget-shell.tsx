"use client";

import { useFilterContext } from "@/context/FilterContext";

import { getAnnuallyExpensesByCategory } from "@/lib/stats";
import { annualBudgets } from "@/lib/utils";

import { BudgetsTable } from "./budget-table";
import BudgetReport from "./budget-report";

import { BudgetStats, Budget } from "@/types";

import { mocktransactions } from "@/assets/__mocks/data/transactions-mocks";

export default function BudgetShell() {
  const { year: selectedYear } = useFilterContext();

  const annuallyExpenses = getAnnuallyExpensesByCategory(
    mocktransactions,
    selectedYear
  );

  // tabels's data
  const tableData: Budget[] = annualBudgets.map((budget) => {
    const spent =
      annuallyExpenses.find((item) => item.name === budget.name)?.value || 0;

    return {
      name: budget.name,
      target: budget.target,
      spent: spent,
      icon: budget.icon,
      tooltip: budget.tooltip,
    };
  });

  // chart's data
  const budgetStatsArray: BudgetStats[] = annualBudgets.map((stats) => {
    const spent =
      annuallyExpenses.find((item) => item.name === stats.name)?.value || 0;
    const spentPercent = (Math.round((spent / stats.target) * 100) * 10) / 10;

    let properties: BudgetStats = {
      name: stats.name,
      targetPercent: 100,
    };

    if (spentPercent >= 100) {
      properties.overBudget = spentPercent;
    } else if (spentPercent > 80) {
      properties.alert = spentPercent;
    } else {
      properties.spent = spentPercent;
    }

    return properties;
  });

  return (
    <div className="flex min-h-screen flex-row items-start justify-start">
      <BudgetsTable data={tableData} />
      <BudgetReport data={budgetStatsArray} selectedYear={selectedYear} />
    </div>
  );
}
