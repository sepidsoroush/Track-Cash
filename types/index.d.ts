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

// Interface to define our Category model on the frontend
export interface Category {
  id: number;
  label: string;
  budget: number;
  icon: LucideIcon;
  tooltip: string;
}

// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export interface HttpRequestError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}
