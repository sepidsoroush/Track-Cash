import React from "react";

import { AddCategoryModal } from "../modals/add-category-modal";

export function ManageCategory() {
  return (
    <nav className="flex h-[52px] w-full items-center justify-between p-4">
      <h1 className="font-cal hidden text-xl font-semibold capitalize leading-none md:inline ml-4">
        Manage Budget
      </h1>
      <AddCategoryModal />
    </nav>
  );
}
