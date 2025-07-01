import React, { useState } from "react";
import Chart from "react-apexcharts";
import * as Apex from "apexcharts";
import { useAppSelector } from "@/hooks";

export function ProductChart() {
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
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    title: {
      text: "Best Products",
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="line" />
    </div>
  );
}
