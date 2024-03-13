import { BankTransaction, NormalizedTransaction } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeTransaction() {}

export const normalizeUser = (transaction: BankTransaction | null) => {
  return !transaction
    ? null
    : ({
        accountNo: transaction["Customer account no"],
        date: transaction.Date,
        label: transaction["Sender/receiver name"],
        amount: transaction.Amount,
        description: transaction.Description,
        category: transaction.Category,
        incomeSource: transaction["Source of income"],
      } satisfies NormalizedTransaction);
};
