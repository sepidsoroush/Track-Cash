import { LucideIcon } from "lucide-react";

export interface Common {}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: LucideIcon;
}

export interface BankTransaction {
  "Customer account no"?: string;
  Date: string;
  "Sender/receiver account"?: string;
  "Sender/receiver"?: string;
  "Sender bank code"?: number;
  "Debit/Credit (D/C)": string;
  Amount: number;
  "Reference number"?: string | number;
  Description?: string | number;
  Fee?: number;
  Currency?: string;
  "Transaction reference"?: number;
  "Document no"?: string | number;
  "Archiving code"?: string | number;
  "Personal code or register code"?: string | number;
  "Sender/receiver bank BIC"?: string;
  "Account servicer reference"?: string;
  Category: string;
  "Source of income"?: string;
}

export interface NormalizedTransaction {
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

// export interface SimpleTransaction {
//   id: number;
//   date: string;
//   label: string;
//   amount: string;
//   description: string;
//   category: string;
//   incomeSource?: string;
// }

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
