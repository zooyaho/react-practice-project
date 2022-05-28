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
          maxValue={null} // 전체 최대값: 달 중 제일 큰 값을 가진 달의 value에 해당
          label={datapoint.label} // 1월,2월...
        />;
      })}
    </div>
  );
};

export default Chart;
