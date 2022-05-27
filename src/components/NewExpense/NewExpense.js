/* 비용 데이터 입력 컴포넌트 */ 
import React from 'react'; // jsx가 사용하는 react라이브러리
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{

  // 자식에서 부모 컴포넌트로 소통하는 방법
  const saveExpenseDataHamdler = (enteredExpenseData)=>{
    // ExpenseForm에서 추가한 요소의 값들을 저장함.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    // App.js컴포넌트로 onAddExpense함수 실행하여, expenseData 보냄.
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHamdler} />
    </div>
  );
};

export default NewExpense;