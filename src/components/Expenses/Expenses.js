import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In Expenses.js", selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {/* key={}: 추가하는 item배열의 순서를 react에게 알려야함. 그렇지 않으면 새로운 item을 맨 뒤에 추가 후 우리가 정한 배열에 맞게 다시 렌더링함-> 성능 측면에서 좋지 않게 됨. */}
      {/* html요소나 컴포넌트에 'key추가 시' 리액트가 개별 아이템을 인식할 수 있도록 도와줌. => 결론은 목록의 아이템을 매핑할때 항상 key를 추가해야함!!!*/}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
