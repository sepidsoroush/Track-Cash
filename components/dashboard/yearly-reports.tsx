import { CardsStats } from "@/components/stats/card-stats";

import { SimplePieChart } from "@/components/charts/simple-pie-chart";

import { Stats } from "@/types";

const data01: Stats[] = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function YearlyReports() {
  return (
    <div className="flex flex-row px-4 gap-4">
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
  );
}
