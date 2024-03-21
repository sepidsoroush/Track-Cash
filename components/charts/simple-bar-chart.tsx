"use client";

import { useTheme } from "next-themes";

import {
  BarChart,
  Bar,
  Rectangle,
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

export function SimpleBarChart({ data }: Props) {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ fontSize: 14 }}
        {...{
          overflow: "visible",
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          tickLine={true}
          axisLine={false}
          fontSize={10}
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
          domain={[0, "dataMax+1"]}
          allowDataOverflow={false}
        />

        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{
            color: theme === "dark" ? "#fff" : "#000",
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          }}
        />
        <Bar
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
          dataKey="value"
          stroke="#f2f2f2"
          activeBar={<Rectangle fill="currentColor" stroke="currentColor" />}
          // label={{ fontSize: 10, position: "top" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
