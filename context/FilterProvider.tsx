"use client";

import React, { useState } from "react";
import FilterContext from "./FilterContext";

import { months } from "@/lib/utils";

interface FilterProviderProps {
  children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const currentDate = new Date();
  const currentYearLabel = currentDate.getFullYear().toString();
  const currentMonthLabel = months[currentDate.getMonth()].label;

  const [category, setCategory] = useState<string>("Income");
  const [year, setYear] = useState<string>(currentYearLabel);
  const [month, setMonth] = useState<string>(currentMonthLabel);
  const [reportType, setReportType] = useState<string>("Monthly");

  const updateCategory = (newCategories: string) => {
    setCategory(newCategories);
  };

  const updateYear = (newYear: string) => {
    setYear(newYear);
  };

  const updateMonth = (newMonth: string) => {
    setMonth(newMonth);
  };

  const updateReportType = (newReportType: string) => {
    setReportType(newReportType);
  };

  return (
    <FilterContext.Provider
      value={{
        category,
        year,
        month,
        reportType,
        updateCategory,
        updateYear,
        updateMonth,
        updateReportType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
