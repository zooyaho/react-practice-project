import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  // props.dataPoints객체의 value(숫자값)으로 되어있는 배열을 반환
  const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value);
  
  // 달 중 최대 value를 얻음.
  // 스프레드 연산자로 dataPointValues배열의 값들을 독립적으로 만들어줌.
  const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalMaximum} // 전체 최대값: 달 중 제일 큰 값을 가진 달의 value에 해당
          label={datapoint.label} // 1월,2월...
        />;
      })}
    </div>
  );
};

export default Chart;
