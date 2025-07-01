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
          }}
          series={series}
          type="donut"
        />
      </span>
    </div>
  );
}
