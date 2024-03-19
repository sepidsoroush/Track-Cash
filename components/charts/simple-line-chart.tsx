"use client";

import { useTheme } from "next-themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Stats } from "@/types";

type Props = {
  data: Stats[];
};

export function SimpleLineChart({ data }: Props) {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ fontSize: 14 }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          domain={[0, "dataMax+1"]}
          allowDataOverflow={false}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
        />
        <Tooltip
          contentStyle={{
            color: theme === "dark" ? "#fff" : "#000",
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="currentColor"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
