"use client";

import { Separator } from "@/components/ui/separator";
import { CategoriesTable } from "@/components/reports/categories/categories-table";
import { ManageCategory } from "@/components/filters/manage-category";
import { Category } from "@/types";

interface IndexProps {
  categories: Array<Category>;
}

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get category data from API
  const res = await fetch(process.env.API_URL as string);
  const categories = await res.json();

  // return props
  return {
    props: { categories },
  };
}

export default function CategoriesShell(props: IndexProps) {
  const { categories } = props;

  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap items-start justify-start">
      {/* <ManageCategory />
      <Separator />
      <CategoriesTable data={categories} /> */}
      {categories.map((item) => (
        <p key={item.id}>{item.label}</p>
      ))}
    </div>
  );
}
