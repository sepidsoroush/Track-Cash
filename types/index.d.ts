import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: LucideIcon;
}

export interface BankTransaction {
  "Customer account no": string;
  "Document no"?: string;
  Date: string;
  "Sender/receiver account": string;
  "Sender/receiver name": string;
  "Sender bank code": number;
  "Debit/Credit (D/C)": string;
  Amount: number;
  "Reference number": string;
  "Archiving code": string;
  Description: string;
  Fee: number;
  Currency: string;
  "Personal code or register code": number;
  "Sender/receiver bank BIC": string;
  "Transaction reference": number;
  "Account servicer reference": string;
  Category: string;
  "Source of income": string;
}

export interface NormalizedTransaction {
  accountNo: string;
  date: string;
  label?: string;
  amount: number;
  description?: string;
  category: string;
  incomeSource?: string;
}
