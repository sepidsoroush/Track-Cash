"use client";

import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

import { NormalizedTransaction } from "@/types";

export const transactionsColumns: ColumnDef<NormalizedTransaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      return <div className="w-24 pr-2">{date}</div>;
    },
  },
  {
    accessorKey: "label",
    header: "Sender/receiver",
    cell: ({ row }) => {
      const label = row.getValue("label") as string;
      return <div className="capitalize pr-2">{label}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      return (
        <div
          className={cn(
            "text-right font-medium pr-2",
            amount > 0 ? "text-green-600" : "text-red-600"
          )}
        >
          {amount}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description") as string;
      return <div className="capitalize pr-2">{description}</div>;
    },
  },

  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return <div className="capitalize">{category}</div>;
    },
  },
];
