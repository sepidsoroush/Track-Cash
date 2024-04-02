import type { Metadata } from "next";
import BudgetShell from "@/components/reports/budget/budget-shell";

export const metadata: Metadata = {
  title: "Budgets",
  description: "Budgets description",
};

export default function DashboardPage() {
  return <BudgetShell />;
}
