import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investments",
  description: "Investments description",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-4xl">
      Investments page
    </div>
  );
}
