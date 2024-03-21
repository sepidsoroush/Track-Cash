"use client";

import React, { useState } from "react";
import FilterContext from "./FilterContext";

import { months } from "@/lib/utils";
import { Month } from "@/types";

interface FilterProviderProps {
  children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const currentDate = new Date();
  const currentYearLabel = currentDate.getFullYear().toString();
  const currentMonth =
    months.find(
      (item) =>
        item.value === (currentDate.getMonth() + 1).toString().padStart(2, "0")
    ) || months[0];

  const [category, setCategory] = useState<string>("Subscriptions");
  const [year, setYear] = useState<string>(currentYearLabel);
  const [month, setMonth] = useState<Month>(currentMonth);

  const updateCategory = (newCategories: string) => {
    setCategory(newCategories);
  };

  const updateYear = (newYear: string) => {
    setYear(newYear);
  };

  const updateMonth = (newMonth: Month) => {
    setMonth(newMonth);
  };

  return (
    <FilterContext.Provider
      value={{
        category,
        year,
        month,
        updateCategory,
        updateYear,
        updateMonth,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
