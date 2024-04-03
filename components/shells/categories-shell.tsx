"use client";

import { useDatabaseContext } from "@/context/DatabaseContext";

export default function CategoriesShell() {
  const { categories } = useDatabaseContext();

  return (
    <div className="flex min-h-screen flex-row items-start justify-start">
      {categories.map((item) => (
        <p key={item._id}>{item.label}</p>
      ))}
    </div>
  );
}
