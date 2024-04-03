import { createContext, useContext } from "react";
import { Category } from "@/types";

interface DatabaseContextProps {
  categories: Category[];
  onFindAll: () => void;
  onCreateNew: (newCategory: Partial<Category>) => Promise<void>;
  onSave: (partialCategory: Partial<Category>) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

const DatabaseContext = createContext<DatabaseContextProps | undefined>(
  undefined
);

export const useDatabaseContext = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error(
      "useDatabaseContext must be used within a DatabaseProvider"
    );
  }
  return context;
};

export default DatabaseContext;
