"use client";

import React, { useState } from "react";
import DatabaseContext from "./DatabaseContext";

import { Category, HttpRequestError } from "@/types";
import { categories as initialCategories } from "@/lib/utils";
import { httpCommon } from "@/hooks/http-common";
import { CATEGORY_ROUTE } from "@/lib/routes";
import { EX_SYSTEM } from "@/lib/error-messages";

import { alerts } from "@/components/layout/alerts";

interface DatabaseProviderProps {
  children: React.ReactNode;
}

const DatabaseProvider: React.FC<DatabaseProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const onFindAll = async () => {
    try {
      const response = await httpCommon.get(`${CATEGORY_ROUTE}`);
      const allcategories = response.data;
      setCategories(allcategories);
    } catch (error) {
      alerts.errorAlert((error as HttpRequestError).message || EX_SYSTEM);
    }
  };

  const onCreateNew = async (newCategory: Partial<Category>) => {
    try {
      const response = await httpCommon.post(
        `${CATEGORY_ROUTE}`,
        JSON.stringify(newCategory)
      );
      const createdCategory = response.data;
      if (createdCategory) {
        await alerts.successAlert("Category created with success");
        setCategories([...categories, createdCategory]);
      }
    } catch (error) {
      alerts.errorAlert((error as HttpRequestError).message || EX_SYSTEM);
    }
  };

  const onSave = async (partialCategory: Partial<Category>) => {
    try {
      const { id } = partialCategory;

      const response = await httpCommon.put(
        `${CATEGORY_ROUTE}/${id}`,
        JSON.stringify(partialCategory)
      );
      const updatedCategory = response.data;
      if (updatedCategory) {
        await alerts.successAlert("Category updated with success");
        const indexUpdated = categories.findIndex(
          (category) => category.id === partialCategory.id
        );
        const updatesCategories = [...categories];
        updatesCategories[indexUpdated] = updatedCategory;
        setCategories(updatesCategories);
      }
    } catch (error) {
      alerts.errorAlert((error as HttpRequestError).message || EX_SYSTEM);
    }
  };

  const onDelete = async (id: number) => {
    const { isConfirmed } = await alerts.confirmActionDanger(
      "Are you sure you want to delete this Category?"
    );
    if (isConfirmed) {
      return await onDeleteConfirmed(id);
    } else {
      return await Promise.reject("Delete Canceled");
    }
  };

  const onDeleteConfirmed = async (id: number) => {
    try {
      await httpCommon.delete(`${CATEGORY_ROUTE}/${id}`);
      await alerts.successAlert("Category deleted with success");
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      alerts.errorAlert((error as HttpRequestError).message || EX_SYSTEM);
    }
  };

  return (
    <DatabaseContext.Provider
      value={{
        categories,
        onFindAll,
        onCreateNew,
        onSave,
        onDelete,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
