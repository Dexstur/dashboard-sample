import React, { useState } from "react";
import Chart from "react-apexcharts";
import * as Apex from "apexcharts";

export function UsersChart() {
  const [series] = useState([421, 120]);
  const [labels] = useState(["Active", "Inactive"]);
  const options: Apex.ApexOptions = {};
  return (
    <div>
      <span className="">
        <Chart
          options={{
            labels,
            colors: ["#0caadc", "#263835"],
            title: {
              text: "Users",
            },
            legend: {
              formatter: (seriesName, opts) => {
                const index = opts.seriesIndex;
                return `${seriesName}: ${series[index].toLocaleString()}`;
              },
              onItemClick: {
                toggleDataSeries: true,
              },
            },
          }}
          series={series}
          type="donut"
          height={540}
        />
      </span>
    </div>
  );
}
