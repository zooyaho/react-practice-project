import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label} // 1월,2월...
        />;
      })}
    </div>
  );
};

export default Chart;
