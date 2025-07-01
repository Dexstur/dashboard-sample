import {
  OrdersChart,
  ProductChart,
  TestChart,
  UsersChart,
} from "./charts/index";

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <TestChart />
      <UsersChart />
      <ProductChart />
      <OrdersChart />
    </div>
  );
}
