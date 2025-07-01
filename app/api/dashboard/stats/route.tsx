export async function GET(req: Request) {
  setTimeout(() => {}, Math.random() * 5000);

  return Response.json({
    message: "Basic Statistics",
    data: {
      totalRevenue: 20409575,
      activeOrders: 782,
      totalUsers: 541,
      totalProducts: 56,
    },
  });
}
