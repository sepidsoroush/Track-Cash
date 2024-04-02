import { Transaction, Stats } from "@/types";
import { months, incomeSources, categories } from "./utils";

const monthlyExpenseAmount = (
  data: Transaction[],
  year: string,
  month: string,
  category: string
): number => {
  const totalAmount = data
    .filter(
      (item) =>
        item.category !== "Income" &&
        item.year === year &&
        item.month === month &&
        item.category === category
    )
    .reduce((sum, item) => sum + item.amount, 0);

  const roundedAmount = Math.round(totalAmount * 10) / 10;

  return Math.abs(roundedAmount);
};

const monthlyIncomePerSource = (
  data: Transaction[],
  year: string,
  month: string,
  source: string
): number => {
  return data
    .filter(
      (item) =>
        item.category === "Income" &&
        item.year === year &&
        item.month === month &&
        item.incomeSource === source
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

// Monthly trend of CategoryExpenses charts functions
export const getCategoryExpensesTrend = (
  data: Transaction[],
  year: string,
  category: string
): Stats[] => {
  const stats: Stats[] = [];

  months.forEach((monthObj) => {
    const value = monthlyExpenseAmount(data, year, monthObj.value, category);
    stats.push({ name: monthObj.label, value });
  });

  return stats;
};

// SourceOfIncome charts functions
export const getMonthlySourceOfIncome = (
  data: Transaction[],
  year: string,
  month: string
): Stats[] => {
  const stats: Stats[] = [];

  incomeSources.forEach((item) => {
    const value = monthlyIncomePerSource(data, year, month, item.label);
    stats.push({ name: item.label, value });
  });

  return stats;
};

export const getAnnuallySourceOfIncome = (
  data: Transaction[],
  year: string
): Stats[] => {
  const stats: Stats[] = [];

  incomeSources.forEach((item) => {
    let totalMonthlyIncome = 0;
    for (let month = 1; month <= 12; month++) {
      totalMonthlyIncome += monthlyIncomePerSource(
        data,
        year,
        month.toString(),
        item.label
      );
    }
    stats.push({ name: item.label, value: totalMonthlyIncome });
  });

  return stats;
};

// allCategories charts functions
export const getMonthlyExpensesByCategory = (
  data: Transaction[],
  year: string,
  month: string
): Stats[] => {
  const stats: Stats[] = [];

  categories.forEach((item) => {
    const value = monthlyExpenseAmount(data, year, month, item.label);
    stats.push({ name: item.label, value });
  });

  return stats;
};

export const getAnnuallyExpensesByCategory = (
  data: Transaction[],
  year: string
): Stats[] => {
  const stats: Stats[] = [];

  categories.forEach((item) => {
    let totalMonthlyExpense = 0;
    for (let month = 1; month <= 12; month++) {
      totalMonthlyExpense += monthlyExpenseAmount(
        data,
        year,
        month.toString(),
        item.label
      );
    }
    stats.push({ name: item.label, value: totalMonthlyExpense });
  });

  return stats;
};

// Saving, Expense, Income charts:
export const totalMonthlyIncome = (
  data: Transaction[],
  year: string,
  month: string
): number => {
  const totalAmount = data
    .filter(
      (item) =>
        item.category === "Income" && item.year === year && item.month === month
    )
    .reduce((sum, item) => sum + item.amount, 0);

  const roundedAmount = Math.round(totalAmount * 10) / 10;

  return Math.abs(roundedAmount);
};

export const totalAnnuallyIncome = (
  data: Transaction[],
  year: string
): number => {
  const totalAmount = data
    .filter((item) => item.category === "Income" && item.year === year)
    .reduce((sum, item) => sum + item.amount, 0);
  const roundedAmount = Math.round(totalAmount * 10) / 10;

  return Math.abs(roundedAmount);
};

export const totalMonthlyExpense = (
  data: Transaction[],
  year: string,
  month: string
): number => {
  const totalAmount = data
    .filter(
      (item) =>
        item.category !== "Income" && item.year === year && item.month === month
    )
    .reduce((sum, item) => sum + item.amount, 0);
  const roundedAmount = Math.round(totalAmount * 10) / 10;

  return Math.abs(roundedAmount);
};

export const totalAnnuallyExpense = (
  data: Transaction[],
  year: string
): number => {
  const totalAmount = data
    .filter((item) => item.category !== "Income" && item.year === year)
    .reduce((sum, item) => sum + item.amount, 0);
  const roundedAmount = Math.round(totalAmount * 10) / 10;

  return Math.abs(roundedAmount);
};

export const getMonthlySummary = (
  data: Transaction[],
  year: string,
  month: string
): { name: string; value: number }[] => {
  const totalIncome = totalMonthlyIncome(data, year, month);
  const totalExpenses = totalMonthlyExpense(data, year, month);
  const saving = Math.round((totalIncome - totalExpenses) * 10) / 10;

  return [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpenses },
    { name: "Savings", value: saving },
  ];
};

export const getAnnuallySummary = (
  data: Transaction[],
  year: string
): { name: string; value: number }[] => {
  const totalIncome = totalAnnuallyIncome(data, year);
  const totalExpenses = totalAnnuallyExpense(data, year);
  const saving = Math.round((totalIncome - totalExpenses) * 10) / 10;

  return [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpenses },
    { name: "Savings", value: saving },
  ];
};
