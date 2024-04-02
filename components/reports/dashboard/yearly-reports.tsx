import { useFilterContext } from "@/context/FilterContext";

import {
  getAnnuallyExpensesByCategory,
  getAnnuallySourceOfIncome,
  getAnnuallySummary,
} from "@/lib/stats";
import { mocktransactions } from "@/assets/__mocks/data/transactions-mocks";

import { CardsStats } from "@/components/layout/card-stats";
import { SimplePieChart } from "@/components/charts/simple-pie-chart";
import { SimpleBarChart } from "../../charts/simple-bar-chart";
import { TwoLevelPieChart } from "../../charts/two-level-pie-chart";

export default function YearlyReports() {
  const { year: selectedYear } = useFilterContext();

  const sourcesOfIncome = getAnnuallySourceOfIncome(
    mocktransactions,
    selectedYear
  );

  const expenses = getAnnuallyExpensesByCategory(
    mocktransactions,
    selectedYear
  );

  const annuallySummary = getAnnuallySummary(mocktransactions, selectedYear);

  const data01 = annuallySummary.filter((item) => item.name === "Income");
  const data02 = annuallySummary.filter((item) => item.name !== "Income");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row px-4 gap-4">
        <CardsStats title={`Annually Expenses By Category in ${selectedYear}`}>
          <div className="h-[300px] w-[600px]">
            <SimpleBarChart data={expenses} />
          </div>
        </CardsStats>
      </div>
      <div className="flex flex-row px-4 gap-4">
        <CardsStats title={`Source of income in ${selectedYear}`}>
          <div className="h-[300px] w-[350px]">
            <SimplePieChart data={sourcesOfIncome} type="pie" />
          </div>
        </CardsStats>
        <CardsStats title={`Income, Expense , Saving in ${selectedYear}`}>
          <div className="h-[300px] w-[350px]">
            <TwoLevelPieChart innerData={data01} outerData={data02} />
          </div>
        </CardsStats>
      </div>
    </div>
  );
}
