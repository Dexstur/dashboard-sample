"use client";

import { DashboardCards } from "./Cards";
import { useDashboardActions } from "@/actions";
import { DashboardCharts } from "./Charts";

export function DashboardScreen() {
  const { dashboardStats, dashboardCharts } = useDashboardActions();
  dashboardStats();
  dashboardCharts();
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardCards />
      <DashboardCharts />
    </div>
  );
}
