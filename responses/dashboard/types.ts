type DashboardStatsDto = {
  totalRevenue: number;
  activeOrders: number;
  totalUsers: number;
  totalProducts: number;
};

type DashboardProductChartItem = {
  year: number;
  value: number;
};

type DashboardChartDto = {
  products: DashboardProductChartItem[];
};
