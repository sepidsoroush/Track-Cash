import type { Metadata } from "next";
import CategoriesShell from "@/components/shells/categories-shell";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories description",
};

export default async function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap items-start justify-start">
      <CategoriesShell />
    </div>
  );
}
