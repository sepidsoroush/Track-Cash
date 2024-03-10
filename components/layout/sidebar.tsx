"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

import { NavItem } from "@/types";

const items: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: Icons.transactions,
  },
  {
    title: "Budgets",
    href: "/dashboard/budgets",
    icon: Icons.budgets,
  },
  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: Icons.investments,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: Icons.categories,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    disabled: true,
    icon: Icons.setting,
  },
];

export function Sidebar() {
  const path = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.disabled ? "#" : item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                path === item.href ? "bg-accent" : "transparent",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}{" "}
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
