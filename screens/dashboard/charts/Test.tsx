import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAppSelector } from "@/hooks";

export function TestChart() {
  const {
    charts: { product },
  } = useAppSelector((state) => state.dashboard);
  const [categories, setCategories] = useState<number[]>([]);
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([]);

  useEffect(() => {
    setCategories(product.map((item) => item.year));
    setSeries([
      {
        name: "product",
        data: product.map((item) => item.value),
      },
    ]);
  }, [product]);

  return (
    <div>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories,
          },
          title: {
            text: "Sales",
          },
        }}
        series={series}
        type="bar"
      />
    </div>
  );
}
