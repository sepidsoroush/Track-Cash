import { useFilterContext } from "@/context/FilterContext";

import { annuallySourceOfIncome } from "@/lib/stats";
import { normalizeTransactions } from "@/lib/utils";

import { CardsStats } from "@/components/layout/card-stats";
import { SimplePieChart } from "@/components/charts/simple-pie-chart";

import data from "@/assets/data.json";

export default function YearlyReports() {
  const { year: selectedYear } = useFilterContext();

  const normalizedData = normalizeTransactions(data);

  const sourcesOfIncome = annuallySourceOfIncome(normalizedData, selectedYear);

  return (
    <div className="flex flex-row px-4 gap-4">
      <CardsStats title={`Source of income in ${selectedYear}`}>
        <div className="h-[300px] w-[300px]">
          <SimplePieChart data={sourcesOfIncome} type="pie" />
        </div>
      </CardsStats>
      {/* <CardsStats title="Expenses Per Category All Months">
        <div className="h-[300px] w-[500px]">
          <SimplePieChart data={data01} type="doughnut" />
        </div>
      </CardsStats> */}
    </div>
  );
}
