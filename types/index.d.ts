import { LucideIcon } from "lucide-react";

export interface Common {}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: LucideIcon;
}

export interface Transaction {
  id: number;
  accountNo?: string;
  date: string;
  year: string;
  month: string;
  label?: string;
  type: string;
  amount: number;
  description?: string | number;
  category: string;
  incomeSource?: string;
}

export interface Month {
  value: string;
  label: string;
  title: string;
}

export interface Stats {
  name: string;
  value: number;
}

export interface BudgetStats {
  name: string;
  targetPercent: number;
  overBudget?: number;
  spent?: number;
  alert?: number;
}

export interface Budget {
  name: string;
  target: number;
  spent: number;
  icon: LucideIcon;
  tooltip: string;
}
