export function mockDashboardProducts() {
  const thisYear = new Date().getFullYear();
  const result: DashboardProductChartItem[] = [];
  const yearsLength = 8;

  for (let i = 0; i < yearsLength; i++) {
    const pad = i + 1;
    const year = thisYear + pad - yearsLength;
    const value = Math.ceil(Math.random() * 1000 * pad);
    result.push({ year, value });
  }

  return result;
}
