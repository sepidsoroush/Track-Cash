import { LucideIcon } from "lucide-react";

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
  accountNo?: string;
  year: string;
  month: string;
  label?: string;
  type: string;
  amount: number;
  description?: string | number;
  category: string;
  incomeSource?: string;
}
