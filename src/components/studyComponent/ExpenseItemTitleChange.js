/* 비용 아이템 컴포넌트 */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, {useState} from 'react';

function ExpenseItem(props) {
  // state값이 변경되면 해당 컴포넌트가 다시 호출되고, jsx코드들이 다시 평가됨.
  // useState등록: 여러개의 ExpenseItem컴포넌트의 props.title이 변경 되어도 서로 영향을 받지 않게됨! -> 같은 컴포넌트여도 자신만의 state값을 갖기 때문.
  const [title, setTitle] = useState(props.title);

  const clickHandler = ()=>{
    setTitle("Update~!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change item</button>
    </Card>
  );
}

export default ExpenseItem;
