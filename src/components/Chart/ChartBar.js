import React from 'react';
import './ChartBar.css'

const ChartBar = (props)=>{
  let barFillHeight = '0%';

  if(props.maxValue > 0){
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        {/* style={{}} 이중괄호는 {width:100px}이 스크립트로 사용되기 때문에 이중괄호를 쓰는 것임!! */}
        <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
}

export default ChartBar;