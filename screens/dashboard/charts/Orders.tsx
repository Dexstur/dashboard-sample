import React, { useState } from "react";
import Chart from "react-apexcharts";
import * as Apex from "apexcharts";

export function OrdersChart() {
  const [series] = useState([782, 129653, 1024]);
  const [labels] = useState(["Active", "Completed", "Cancelled"]);
  const options: Apex.ApexOptions = {
    labels,
    colors: ["#0caadc", "#23ce6b", "#263835"],
    title: {
      text: "Orders",
    },
    legend: {
      formatter: (seriesName, opts) => {
        const index = opts.seriesIndex;
        return `${seriesName}: ${series[index].toLocaleString()}`;
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
  };
  return (
    <div>
      <span className="">
        <Chart options={options} series={series} type="pie" height={540} />
      </span>
    </div>
  );
}
