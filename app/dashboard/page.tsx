import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

import data from "@/assets/data.json";
import { expensesPerCategoryAllMonths } from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";
import { CardsStats } from "@/components/stats/card-stats";
import { ReportSelection } from "@/components/dashboard/report-selection";
import { YearSelection } from "@/components/dashboard/year-selection";
import { MonthSelection } from "@/components/dashboard/month-selection";
import { CategorySelection } from "@/components/dashboard/category-selection";

import { SimpleLineChart } from "@/components/charts/simple-line-chart";
import { SimpleBarChart } from "@/components/charts/simple-bar-chart";
import { SimplePieChart } from "@/components/charts/simple-pie-chart";
import { Stats } from "@/types";

const data01: Stats[] = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function DashboardPage() {
  const normalizedData = normalizeTransactions(data);

  const expensesPerCategory = expensesPerCategoryAllMonths(
    normalizedData,
    "2023",
    "Subscriptions"
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-start text-4xl">
      <nav className="flex flex-row items-start justify-start p-4 mb-2 gap-4 w-full border-b bg-background/60 backdrop-blur-xl">
        <ReportSelection />
        <YearSelection />
        <MonthSelection />
        <CategorySelection />
      </nav>
      <div className="flex flex-row">
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
      <div className="flex flex-row">
        <CardsStats title="Expenses Per Category All Months">
          <div className="h-[300px] w-[500px]">
            <SimplePieChart data={data01} type="pie" />
          </div>
        </CardsStats>
        <CardsStats title="Expenses Per Category All Months">
          <div className="h-[300px] w-[500px]">
            <SimplePieChart data={data01} type="doughnut" />
          </div>
        </CardsStats>
      </div>
    </div>
  );
}
