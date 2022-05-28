/* chart 출력하는 컴포넌트 */
import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props)=>{
  const chartDataPoints = [
    { label: 'Jan', value: 0},
    { label: 'Fab', value: 0},
    { label: 'Mar', value: 0},
    { label: 'Apr', value: 0},
    { label: 'May', value: 0},
    { label: 'Jun', value: 0},
    { label: 'Jul', value: 0},
    { label: 'Agu', value: 0},
    { label: 'Sep', value: 0},
    { label: 'Oct', value: 0},
    { label: 'Nov', value: 0},
    { label: 'Dec', value: 0},
  ];

  // 선택한 연도의 월별 amount값을 각 달에 합산하여 chartDataPoints업데이트
  for(const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // 0 = 1월
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <Chart dataPoints={chartDataPoints}/>
  );
}

export default ExpensesChart;