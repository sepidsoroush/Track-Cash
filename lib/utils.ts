import { BankTransaction, NormalizedTransaction } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizeTransactions = (
  transactions: BankTransaction[]
): NormalizedTransaction[] => {
  return transactions.map((transaction) => ({
    accountNo: transaction["Customer account no"],
    year: transaction.Date.substring(0, 4),
    month: transaction.Date.substring(5, 7),
    label: transaction["Sender/receiver"],
    type: transaction["Debit/Credit (D/C)"],
    amount: transaction.Amount,
    description: transaction.Description,
    category: transaction.Category,
    incomeSource: transaction["Source of income"],
  }));
};

export const months = [
  { label: "Jan", value: "01" },
  { label: "Feb", value: "02" },
  { label: "Mar", value: "03" },
  { label: "Apr", value: "04" },
  { label: "May", value: "05" },
  { label: "Jun", value: "06" },
  { label: "Jul", value: "07" },
  { label: "Aug", value: "08" },
  { label: "Sep", value: "09" },
  { label: "Oct", value: "10" },
  { label: "Nov", value: "11" },
  { label: "Dec", value: "12" },
];

function generateYearsArray() {
  const yearsArray = [];
  for (let year = 2020; year <= 2030; year++) {
    yearsArray.push(year.toString());
  }
  return yearsArray;
}

export const years = generateYearsArray();

export const categories = [
  { label: "Income" },
  { label: "Transportation" },
  { label: "Bills" },
  { label: "Subscriptions" },
  { label: "Education" },
  { label: "Groceries" },
  { label: "Restaurants" },
  { label: "Health & Fitness" },
  { label: "Personal Care" },
  { label: "Travel" },
  { label: "Bank Transfer" },
  { label: "Business expenses" },
  { label: "Investments" },
  { label: "Miscellaneous" },
];

export const reports = [
  { label: "Monthly" },
  { label: "Annualy" },
  { label: "Total" },
];
