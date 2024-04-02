import { faker } from "@faker-js/faker";
import { categories, incomeSources, accounts } from "@/lib/utils";
import { NormalizedTransaction } from "@/types";

const transactions: NormalizedTransaction[] = [];

const howManyTransactions = 100;

const createTransactions = (howMany: number): NormalizedTransaction[] => {
  let idCounter = 1000;

  const numIncomeTransactions = Math.ceil(howMany * 0.05);
  const numExpenseTransactions = howMany - numIncomeTransactions;

  const transactionsData: NormalizedTransaction[] = [];

  for (let i = 0; i < numIncomeTransactions; i++) {
    const date = faker.date
      .between({
        from: "2020-01-01T00:00:00.000Z",
        to: "2025-01-01T00:00:00.000Z",
      })
      .toISOString()
      .slice(0, 10);
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);

    const label = faker.company.name();
    const accountNo = accounts[0].accountNo;
    const amount = faker.finance.amount({ dec: 2, min: 1, max: 10000 });
    const description = faker.finance.transactionDescription();
    const type = "C";

    const category = categories[0].label;
    const incomeSource = faker.helpers.arrayElement(incomeSources).label;

    transactionsData.push({
      id: idCounter++,
      date,
      year,
      month,
      accountNo,
      label,
      amount: Number(amount),
      description,
      type,
      category,
      incomeSource,
    });
  }

  for (let i = 0; i < numExpenseTransactions; i++) {
    const date = faker.date
      .between({
        from: "2020-01-01T00:00:00.000Z",
        to: "2025-01-01T00:00:00.000Z",
      })
      .toISOString()
      .slice(0, 10);
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);

    const accountNo = faker.helpers.arrayElement(accounts).accountNo;
    const label = faker.company.name();
    const amount = faker.finance.amount({
      dec: 2,
      min: -500,
      max: -1,
    });
    const description = faker.finance.transactionDescription();
    const type = "D";

    const category = faker.helpers.arrayElement(categories.slice(1)).label;

    transactionsData.push({
      id: idCounter++,
      date,
      year,
      month,
      accountNo,
      label,
      amount: Number(amount),
      description,
      type,
      category,
    });
  }

  return transactionsData;
};

export const generateMocktransactions = (): NormalizedTransaction[] => {
  if (transactions.length == 0) {
    const calculatedTransactions = createTransactions(howManyTransactions);
    transactions.push(...calculatedTransactions);
  }
  return transactions;
};

export const mocktransactions = generateMocktransactions();
