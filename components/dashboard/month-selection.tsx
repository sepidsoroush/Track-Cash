"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { months } from "@/lib/utils";

export function MonthSelection() {
  const currentDate = new Date();
  const currentMonthLabel = months[currentDate.getMonth()].label;
  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonthLabel);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="month">Select month:</Label>
            <Badge variant="default" id="month">
              {selectedMonth}
            </Badge>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {months.map((item) => {
          return (
            <DropdownMenuItem
              key={item.label}
              onClick={() => setSelectedMonth(item.label)}
            >
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
