import { NormalizedTransaction } from "@/types";

export const monthlyExpensePerCategory = (
  data: NormalizedTransaction[],
  year: string,
  month: string,
  category: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "D" &&
        item.year === year &&
        item.month === month &&
        item.category === category
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

export const annuallyExpensePerCategory = (
  data: NormalizedTransaction[],
  year: string,
  category: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "D" && item.year === year && item.category === category
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

export const totalAnnuallyExpense = (
  data: NormalizedTransaction[],
  year: string
): number => {
  return data
    .filter((item) => item.type === "D" && item.year === year)
    .reduce((sum, item) => sum + item.amount, 0);
};

export const monthlyIncomePerSource = (
  data: NormalizedTransaction[],
  year: string,
  month: string,
  source: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "C" &&
        item.year === year &&
        item.month === month &&
        item.incomeSource === source
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

export const annuallyIncomePerSource = (
  data: NormalizedTransaction[],
  year: string,
  source: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "C" && item.year === year && item.incomeSource === source
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

export const totalAnnuallyIncome = (
  data: NormalizedTransaction[],
  year: string
): number => {
  return data
    .filter((item) => item.type === "C" && item.year === year)
    .reduce((sum, item) => sum + item.amount, 0);
};
