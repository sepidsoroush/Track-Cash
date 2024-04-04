"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Ellipsis, Bolt, Trash } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";

import { Category } from "@/types";

export const categoriesColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ row }) => {
      const Icon = row.original.icon;
      return <Icon />;
    },
  },
  {
    accessorKey: "label",
    header: "Category",
    cell: ({ row }) => {
      const name = row.getValue("label") as string;
      return <div className="capitalize">{name}</div>;
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

      return (
        <div className="text-right font-medium text-green-600">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "tooltip",
    header: () => <div className="text-left">Description</div>,
    cell: ({ row }) => {
      const tooltip = row.getValue("tooltip") as string;
      return <div className="text-left font-medium">{tooltip}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Bolt className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
