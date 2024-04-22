"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

import { NavItem } from "@/types";
import { Badge } from "../ui/badge";

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
    disabled: true,
    icon: Icons.investments,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    disabled: false,
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className="flex flex-row justify-between items-center"
          >
            <div
              className={cn(
                "group flex items-center rounded-md py-2 px-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                path === item.href ? "bg-accent" : "transparent",
                item.disabled && "cursor-not-allowed opacity-80",
                isSmallScreen ? "mx-1" : "mx-2"
              )}
            >
              {item.icon && (
                <item.icon
                  className={cn("h-4 w-4", isSmallScreen ? null : "mr-2")}
                />
              )}{" "}
              <span>{isSmallScreen ? null : item.title}</span>
            </div>
            {item.disabled ? (
              <Badge
                variant="secondary"
                id="soon"
                className="hidden md:inline-block"
              >
                soon
              </Badge>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
