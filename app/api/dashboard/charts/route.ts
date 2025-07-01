import { mockDashboardProducts } from "@/mock";

export async function GET(req: Request) {
  setTimeout(() => {}, Math.random() * 5000);
  const products = mockDashboardProducts();
  return Response.json({
    message: "Dashboard charts",
    data: {
      products,
    },
  });
}
