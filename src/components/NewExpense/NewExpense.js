/* 비용 데이터 입력 컴포넌트 */
import React, { useState } from "react"; // jsx가 사용하는 react라이브러리
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // 자식에서 부모 컴포넌트로 소통하는 방법
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // ExpenseForm에서 추가한 요소의 값들을 저장함.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // App.js컴포넌트로 onAddExpense함수 실행하여, expenseData 보냄.
    props.onAddExpense(expenseData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
