import { TransactionsTable } from "@/components/reports/transactions/transactions-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
  description: "Transactions description",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-row items-start justify-start">
      <TransactionsTable />
    </div>
  );
}
