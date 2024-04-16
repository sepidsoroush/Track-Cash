import { Category } from "@/types";
import type { Metadata } from "next";
import { ManageCategory } from "@/components/filters/manage-category";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories description",
};

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not in JSON format");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories: ", error);
  }
};

export default async function DashboardPage() {
  const categories: Category[] = await getData();

  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap items-start justify-start">
      <ManageCategory />
      <div>
        <p>No results to display</p>
        {/* {categories ? (
          categories.map((item) => <p key={item.id}>{item.label}</p>)
        ) : (
          <p>No results to display</p>
        )} */}
      </div>
    </div>
  );
}
