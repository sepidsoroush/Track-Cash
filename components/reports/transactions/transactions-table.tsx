"use client";

import { mocktransactions } from "@/assets/__mocks/data/transactions-mocks";
import { transactionsColumns as columns } from "./transactions-columns";
import { ReactTable } from "@/components/ui/react-table";

export function TransactionsTable() {
  return (
    <div className="space-y-2 p-4">
      <ReactTable data={mocktransactions} columns={columns} />
    </div>
  );
}
