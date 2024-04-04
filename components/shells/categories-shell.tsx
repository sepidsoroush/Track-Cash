"use client";

import { useDatabaseContext } from "@/context/DatabaseContext";
import { CategoriesTable } from "../reports/categories/categories-table";

export default function CategoriesShell() {
  const { categories } = useDatabaseContext();

  return (
    <div className="flex min-h-screen flex-row items-start justify-start">
      <CategoriesTable data={categories} />
    </div>
  );
}
