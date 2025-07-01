type DashboardState = {
  loading: boolean;
  totalRevenue: number;
  activeOrders: number;
  totalUsers: number;
  totalProducts: number;
  charts: {
    product: DashboardProductChartItem[];
  };
};
