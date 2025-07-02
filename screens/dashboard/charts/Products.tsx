import React, { useState } from "react";
import Chart from "react-apexcharts";
import * as Apex from "apexcharts";
import { useAppSelector } from "@/hooks";
import { mockDashboardProducts } from "@/mock";

export function ProductChart() {
  const mockData = mockDashboardProducts();
  const [series] = useState([
    {
      name: "product 1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "product 2",
      data: [10, 20, 40, 26, 38, 70, 60, 64],
    },
    {
      name: "product 3",
      data: [40, 32, 55, 60, 42, 90, 75, 89],
    },
  ]);
  const [labels] = useState(["Active", "Inactive"]);
  const options: Apex.ApexOptions = {
    chart: {
      id: "basic-bar",
      zoom: {
        allowMouseWheelZoom: false,
      },
    },
    xaxis: {
      categories: mockData.map((item) => item.year),
    },
    title: {
      text: "Best Products",
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="line" zoom={{}} />
    </div>
  );
}
