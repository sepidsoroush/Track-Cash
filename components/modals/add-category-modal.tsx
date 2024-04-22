"use client";

import { CategoryForm } from "@/components/forms/category-form";

export function AddCategoryModal() {
  return (
    <CategoryForm
      title="Add category"
      description="Make changes to your categories here. Click save when you're done."
      action="create"
    />
  );
}
