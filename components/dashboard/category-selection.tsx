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
import { categories } from "@/lib/utils";

export function CategorySelection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Income");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="category">Select category:</Label>
            {selectedCategory ? (
              <Badge variant="default" id="category">
                {selectedCategory}
              </Badge>
            ) : (
              <Badge variant="default" id="category">
                {selectedCategory}
              </Badge>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {categories.map((item) => {
          return (
            <DropdownMenuItem onClick={() => setSelectedCategory(item.label)}>
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
