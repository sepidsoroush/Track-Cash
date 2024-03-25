import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgets",
  description: "Budgets description",
};

import { BudgetsTable } from "@/components/reports/budget-table";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start">
      <BudgetsTable />
    </div>
  );
}
