"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import { reports } from "@/lib/utils";

export function ReportSelection() {
  const [selectedReport, setSelectedReport] = useState<string>("Monthly");

  return (
    <Button variant="ghost" size="sm" className="h-8 px-4">
      <div className="flex items-center space-x-2">
        <Label htmlFor="category">Select category:</Label>
        {reports.map((item) => {
          return (
            <Badge
              variant={selectedReport === item.label ? "default" : "outline"}
              onClick={() => setSelectedReport(item.label)}
              key={item.label}
            >
              {item.label}
            </Badge>
          );
        })}
      </div>
    </Button>
  );
}
