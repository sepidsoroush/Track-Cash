import React from "react";
import { useTheme } from "next-themes";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { BudgetStats } from "@/types";

type Props = {
  data: BudgetStats[];
};

export function LineBarComposedChart({ data }: Props) {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ fontSize: 12 }}
        {...{
          overflow: "visible",
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          fontSize={10}
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis
          domain={[0, "dataMax+1"]}
          allowDataOverflow={false}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `%${value}`}
        />
        <Tooltip
          contentStyle={{
            color: theme === "dark" ? "#fff" : "#000",
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          }}
        />
        <Legend />
        <Bar dataKey="spent" barSize={10} fill="currentColor" />
        <Bar dataKey="overBudget" barSize={10} fill="#dc2626" />
        <Bar dataKey="alert" barSize={10} fill="#f97316" />
        <Line
          dataKey="targetPercent"
          fill="currentColor"
          stroke="currentColor"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
