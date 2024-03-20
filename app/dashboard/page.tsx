import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function DashboardPage() {
  return <DashboardShell />;
}
