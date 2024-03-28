"use client";

import { useFilterContext } from "@/context/FilterContext";

import { getAnnuallyExpensesByCategory } from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";
import { annualBudgets } from "@/lib/utils";

import { TurnOffDefaultPropsWarning } from "../turnoff-error";
import { CardsStats } from "@/components/layout/card-stats";
import { LineBarComposedChart } from "../charts/composed-chart";

import { BudgetStats } from "@/types";

import data from "@/assets/data.json";

export default function BudgetReport() {
  const { year: selectedYear } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  const annuallyExpenses = getAnnuallyExpensesByCategory(
    normalizedData,
    selectedYear
  );

  const budgetStatsArray: BudgetStats[] = annualBudgets.map((stats) => {
    const spentPercent =
      (Math.round((stats.spent / stats.target) * 100) * 10) / 10;

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
    <div className="flex flex-col gap-4 p-4">
      <TurnOffDefaultPropsWarning />
      <CardsStats title={`Annually Budgets By Category in ${selectedYear}`}>
        <div className="h-[300px] w-[600px]">
          <LineBarComposedChart data={budgetStatsArray} />
        </div>
      </CardsStats>
    </div>
  );
}
