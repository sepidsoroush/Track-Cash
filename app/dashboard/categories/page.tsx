import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories description",
};

import CategoriesShell from "@/components/shells/categories-shell";

export default function DashboardPage() {
  return <CategoriesShell />;
}
