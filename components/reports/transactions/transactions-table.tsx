"use client";

import { normalizeTransactions } from "@/lib/utils";

import bankTransactions from "@/assets/data.json";
import { transactionsColumns as columns } from "./transactions-columns";
import { ReactTable } from "@/components/ui/react-table";

export function TransactionsTable() {
  const data = normalizeTransactions(bankTransactions);

  return (
    <div className="space-y-2 p-4">
      <ReactTable data={data} columns={columns} />
    </div>
  );
}
