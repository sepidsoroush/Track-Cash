"use client";

import { CategoryForm } from "@/components/forms/category-form";
import { Icons } from "@/components/common/icons";

import { Category } from "@/types";

export function AddCategoryModal() {
  const emptyCategory: Category = {
    id: 0,
    label: "",
    budget: 0,
    icon: Icons.CircleHelp,
  };

  return (
    <CategoryForm
      title="Add category"
      description="Make changes to your categories here. Click save when you're done."
      category={emptyCategory}
      action="create"
    />
  );
}
