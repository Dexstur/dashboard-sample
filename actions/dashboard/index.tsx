import { DashboardChartResponse, DashboardStatsResponse } from "@/responses";
import { getDashboardStats, getDashboardCharts } from "@/requests/dashboard";
import { useAppDispatch } from "@/hooks";
import {
  setDashboardLoading,
  setDashboardCharts,
  setDashboardStats,
} from "@/lib";

export function useDashboardActions() {
  const dispatch = useAppDispatch();
  async function dashboardStats() {
    try {
      const response: DashboardStatsResponse = await getDashboardStats();
      dispatch(setDashboardStats(response.data));
      dispatch(setDashboardLoading(false));
    } catch (error: any) {
      console.error(error);
      dispatch(setDashboardLoading(false));
    }
  }

  async function dashboardCharts() {
    try {
      const response: DashboardChartResponse = await getDashboardCharts();
      console.log(response);
      dispatch(
        setDashboardCharts({
          charts: {
            product: response.data.products,
          },
        })
      );
      dispatch(setDashboardLoading(false));
    } catch (error: any) {
      console.error(error);
      dispatch(setDashboardLoading(false));
    }
  }

  return {
    dashboardStats,
    dashboardCharts,
  };
}
