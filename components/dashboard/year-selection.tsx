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
import { years } from "@/lib/utils";

export function YearSelection() {
  const currentDate = new Date();
  const currentYearLabel = years[currentDate.getMonth()];
  const [selectedYear, setSelectedYear] = useState<string>(currentYearLabel);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="year">Select year:</Label>
            <Badge variant="default" id="year">
              {selectedYear}
            </Badge>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {years.map((item) => {
          return (
            <DropdownMenuItem key={item} onClick={() => setSelectedYear(item)}>
              {item}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
