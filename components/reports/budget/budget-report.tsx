"use client";

import { TurnOffDefaultPropsWarning } from "../../common/turnoff-error";
import { CardsStats } from "@/components/layout/card-stats";
import { LineBarComposedChart } from "../../charts/composed-chart";

import { BudgetStats } from "@/types";

type Props = {
  data: BudgetStats[];
  selectedYear: string;
};

export default function BudgetReport({ data, selectedYear }: Props) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <TurnOffDefaultPropsWarning />
      <CardsStats title={`Annually Budgets By Category in ${selectedYear}`}>
        <div className="h-[300px] w-[600px]">
          <LineBarComposedChart data={data} />
        </div>
      </CardsStats>
    </div>
  );
}
