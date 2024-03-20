import { createContext, useContext } from "react";

interface FilterContextProps {
  category: string;
  year: string;
  month: string;
  updateCategory: (categories: string) => void;
  updateYear: (year: string) => void;
  updateMonth: (month: string) => void;
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
