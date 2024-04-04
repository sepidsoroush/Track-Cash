"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Budget } from "@/types";

export const columns: ColumnDef<Budget>[] = [
  {
    accessorKey: "name",
    header: "Category",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const tooltip = row.original.tooltip;
      const Icon = row.original.icon;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-2">
                <Icon />
                <div className="capitalize">{name}</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "spent",
    header: () => <div className="text-right">Spent</div>,
    cell: ({ row }) => {
      const spent = parseFloat(row.getValue("spent"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(spent);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "progress",
    header: "Status",
    cell: ({ row }) => {
      const current = row.getValue("budget") as number;
      const spent = row.getValue("spent") as number;

      const progressPercent = current > 0 ? (spent / current) * 100 : 0;

      return (
        <div className="min-w-28 px-2">
          <Progress value={progressPercent} className="w-full" />
        </div>
      );
    },
  },

  {
    accessorKey: "budget",
    header: () => <div className="text-right">Budget</div>,
    cell: ({ row }) => {
      const budget = parseFloat(row.getValue("budget"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(budget);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
