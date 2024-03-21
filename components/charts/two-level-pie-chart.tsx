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
  innerData: Stats[];
  outerData: Stats[];
};

const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#FF8042"];

export const TwoLevelPieChart: React.FC<Props> = ({ innerData, outerData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400} style={{ fontSize: 12 }}>
        <Pie
          data={innerData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#0088FE"
        />
        <Pie
          data={outerData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        >
          {outerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
