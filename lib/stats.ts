import { NormalizedTransaction, Stats } from "@/types";
import { months, incomeSources } from "./utils";

const monthlyExpensePerCategory = (
  data: NormalizedTransaction[],
  year: string,
  month: string,
  category: string
): number => {
  return Math.abs(
    data
      .filter(
        (item) =>
          (item.type === "D" ||
            (item.type === "C" && item.category !== "Income")) &&
          item.year === year &&
          item.month === month &&
          item.category === category
      )
      .reduce((sum, item) => sum + item.amount, 0)
  );
};

const annuallyExpensePerCategory = (
  data: NormalizedTransaction[],
  year: string,
  category: string
): number => {
  return data
    .filter(
      (item) =>
        (item.type === "D" ||
          (item.type === "C" && item.category !== "Income")) &&
        item.year === year &&
        item.category === category
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

const totalAnnuallyExpense = (
  data: NormalizedTransaction[],
  year: string
): number => {
  return data
    .filter(
      (item) =>
        (item.type === "D" ||
          (item.type === "C" && item.category !== "Income")) &&
        item.year === year
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

const monthlyIncomePerSource = (
  data: NormalizedTransaction[],
  year: string,
  month: string,
  source: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "C" &&
        item.category === "Income" &&
        item.year === year &&
        item.month === month &&
        item.incomeSource === source
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

const annuallyIncomePerSource = (
  data: NormalizedTransaction[],
  year: string,
  source: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "C" &&
        item.category === "Income" &&
        item.year === year &&
        item.incomeSource === source
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

const totalAnnuallyIncome = (
  data: NormalizedTransaction[],
  year: string
): number => {
  return data
    .filter(
      (item) =>
        item.type === "C" && item.category === "Income" && item.year === year
    )
    .reduce((sum, item) => sum + item.amount, 0);
};

// charts functions
export const expensesPerCategoryAllMonths = (
  data: NormalizedTransaction[],
  year: string,
  category: string
): Stats[] => {
  const stats: Stats[] = [];

  months.forEach((monthObj) => {
    const value = monthlyExpensePerCategory(
      data,
      year,
      monthObj.value,
      category
    );
    stats.push({ name: monthObj.label, value });
  });

  return stats;
};

export const monthlySourceOfIncome = (
  data: NormalizedTransaction[],
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

export const annuallySourceOfIncome = (
  data: NormalizedTransaction[],
  year: string
): Stats[] => {
  const stats: Stats[] = [];

  incomeSources.forEach((item) => {
    const value = annuallyIncomePerSource(data, year, item.label);
    stats.push({ name: item.label, value });
  });

  return stats;
};
