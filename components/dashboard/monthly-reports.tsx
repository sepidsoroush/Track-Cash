import { expensesPerCategoryAllMonths } from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";
import { CardsStats } from "@/components/stats/card-stats";

import { SimpleLineChart } from "@/components/charts/simple-line-chart";
import { SimpleBarChart } from "@/components/charts/simple-bar-chart";

import data from "@/assets/data.json";

export default function MonthlyReports() {
  const normalizedData = normalizeTransactions(data);

  const expensesPerCategory = expensesPerCategoryAllMonths(
    normalizedData,
    "2023",
    "Subscriptions"
  );

  return (
    <div className="flex flex-row px-4 gap-4">
      <CardsStats title="Expenses Per Category All Months">
        <div className="h-[300px] w-[500px]">
          <SimpleLineChart data={expensesPerCategory} />
        </div>
      </CardsStats>
      <CardsStats title="Expenses Per Category All Months">
        <div className="h-[300px] w-[500px]">
          <SimpleBarChart data={expensesPerCategory} />
        </div>
      </CardsStats>
    </div>
  );
}
