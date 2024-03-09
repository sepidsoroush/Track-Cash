import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories description",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-4xl">
      Categories page
    </div>
  );
}
