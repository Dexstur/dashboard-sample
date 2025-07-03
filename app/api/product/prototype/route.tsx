import { mockPrototypes } from "@/mock";

export async function GET(req: Request) {
  setTimeout(() => {}, Math.random() * 5000);

  const queries = new URL(req.url).searchParams;

  const params = ["page", "limit", "search"];

  const values = params.map((p) => queries.get(p));

  const page = Number(values[0]) || 1;
  const limit = Number(values[1]) || 10;
  const search = values[2] || "";

  const dataSet = search
    ? mockPrototypes.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : mockPrototypes;

  const start = (page - 1) * limit;
  const end = page * limit;

  const data = dataSet.slice(start, end);
  return Response.json({
    message: "Prototypes list",
    page,
    limit,
    total: dataSet.length,
    data,
  });
}
