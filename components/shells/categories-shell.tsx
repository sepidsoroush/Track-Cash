import { Separator } from "@/components/ui/separator";
import { CategoriesTable } from "@/components/reports/categories/categories-table";
import { ManageCategory } from "@/components/filters/manage-category";
import { Category } from "@/types";
import { CATEGORY_ROUTE } from "@/lib/routes";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}${CATEGORY_ROUTE}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories: ", error);
  }
};

export default async function CategoriesShell() {
  const categories: Category[] = await getData();
  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap items-start justify-start">
      <ManageCategory />
      <Separator />
      {/* <CategoriesTable data={categories} /> */}
      {categories.map((item) => (
        <div key={item._id}>
          {item.label} <span>{item.tooltip}</span>
        </div>
      ))}
    </div>
  );
}
