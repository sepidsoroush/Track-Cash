"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Stats } from "@/types";

type Props = {
  data: Stats[];
  type: string;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const NoDataPlaceholder = [{ name: "No Data", value: 1 }];

export const SimplePieChart: React.FC<Props> = ({ data, type }) => {
  const totalValue = data.reduce((acc, { value }) => acc + value, 0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400} style={{ fontSize: 12 }}>
        {totalValue === 0 ? (
          <Pie dataKey="value" data={NoDataPlaceholder} fill="#e3e3e3" />
        ) : (
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={type === "pie" ? 0 : 50}
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        )}
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
