import { createContext, useContext } from "react";
import { Month } from "@/types";

interface FilterContextProps {
  category: string;
  year: string;
  month: Month;
  updateCategory: (categories: string) => void;
  updateYear: (year: string) => void;
  updateMonth: (month: Month) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export default FilterContext;
