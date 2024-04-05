"use client";

import { useDatabaseContext } from "@/context/DatabaseContext";

import { Separator } from "@/components/ui/separator";
import { CategoriesTable } from "@/components/reports/categories/categories-table";
import { ManageCategory } from "@/components/filters/manage-category";

export default function CategoriesShell() {
  const { categories } = useDatabaseContext();

  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start">
      <ManageCategory />
      <Separator />
      <CategoriesTable data={categories} />
    </div>
  );
}
