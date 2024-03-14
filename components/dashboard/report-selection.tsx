"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

export function ReportSelection() {
  return (
    <Tabs defaultValue="monthly" id="report">
      <Label htmlFor="report" className="mr-4 px-4">
        Select report type:
      </Label>

      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="annually">Annually</TabsTrigger>
        <TabsTrigger value="total">Total</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly">Put monthly report here.</TabsContent>
      <TabsContent value="annually">Put annually report here.</TabsContent>
      <TabsContent value="total">Put total report here.</TabsContent>
    </Tabs>
  );
}
