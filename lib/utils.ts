import { BankTransaction, NormalizedTransaction, Month } from "@/types";
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

export const months: Month[] = [
  { label: "Jan", value: "01", title: "January" },
  { label: "Feb", value: "02", title: "February" },
  { label: "Mar", value: "03", title: "March" },
  { label: "Apr", value: "04", title: "April" },
  { label: "May", value: "05", title: "May" },
  { label: "Jun", value: "06", title: "June" },
  { label: "Jul", value: "07", title: "July" },
  { label: "Aug", value: "08", title: "August" },
  { label: "Sep", value: "09", title: "September" },
  { label: "Oct", value: "10", title: "October" },
  { label: "Nov", value: "11", title: "November" },
  { label: "Dec", value: "12", title: "December" },
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
  // { label: "Income" },
  { label: "Transportation" },
  { label: "Bills" },
  { label: "Subscriptions" },
  { label: "Education" },
  { label: "Groceries" },
  { label: "Restaurants" },
  { label: "Health & Fitness" },
  { label: "Personal Care" },
  { label: "Travel" },
  { label: "Business expenses" },
  { label: "Miscellaneous" },
];

export const incomeSources = [
  { label: "Company" },
  { label: "Freelance" },
  { label: "Store" },
];

// export const monthlyBudgets = [
//   { label: "Groceries", target: 550 },
//   { label: "Restaurants", target: 150 },
//   { label: "Expenses", target: 2200 },
// ];

export const annuallyBudgets = [
  { name: "Transportation", target: 300 },
  { name: "Bills", target: 10500 },
  { name: "Subscriptions", target: 400 },
  { name: "Education", target: 200 },
  { name: "Health & Fitness", target: 1200 },
  { name: "Business expenses", target: 1500 },
  { name: "Groceries", target: 6000 },
  { name: "Restaurants", target: 2000 },
  { name: "Home", target: 1000 },
  { name: "Personal Care", target: 2500 },
  { name: "Travel", target: 4000 },
];
