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

export interface Category {
  _id: number;
  label: string;
  budget: number;
  icon?: LucideIcon;
  tooltip?: string;
}

export interface Budget extends Category {
  spent: number;
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
