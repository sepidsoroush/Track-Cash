"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import { YearSelection } from "@/components/filters/year-selection";
import { MonthSelection } from "@/components/filters/month-selection";
import { CategorySelection } from "@/components/filters/category-selection";
import { TurnOffDefaultPropsWarning } from "../common/turnoff-error";

import MonthlyReports from "../reports/dashboard/monthly-reports";
import YearlyReports from "../reports/dashboard/yearly-reports";

export function DashboardShell() {
  return (
    <Tabs defaultValue="monthly" id="report">
      <div className="flex flex-col items-center justify-start text-4xl">
        <nav className="flex flex-row items-start justify-start p-4 mb-2 gap-4 w-full border-b bg-background/60">
          <div className="flex flex-row items-center justify-start">
            <Label htmlFor="report" className="mr-4 px-4">
              Select report type:
            </Label>
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annually">Annually</TabsTrigger>
            </TabsList>
          </div>
          <YearSelection />
          <MonthSelection />
          <CategorySelection />
        </nav>
      </div>
      <TurnOffDefaultPropsWarning />

      <TabsContent value="monthly">
        <MonthlyReports />
      </TabsContent>
      <TabsContent value="annually">
        <YearlyReports />
      </TabsContent>
    </Tabs>
  );
}
