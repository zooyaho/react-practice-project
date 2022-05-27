/* 비용 데이터 입력 컴포넌트 */ 
import React from 'react'; // jsx가 사용하는 react라이브러리
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ()=>{
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;