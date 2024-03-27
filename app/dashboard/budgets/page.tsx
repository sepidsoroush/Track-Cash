import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets",
  description: "Budgets description",
};

import { BudgetsTable } from "@/components/reports/budget-table";
import BudgetReport from "@/components/reports/budget-report";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-row items-start justify-start">
      <BudgetsTable />
      <BudgetReport />
    </div>
  );
}
