import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings description",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between text-4xl">
      Settings page
    </div>
  );
}
