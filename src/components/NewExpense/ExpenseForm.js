/* 비용데이터 모으는 폼 컴포넌트*/
import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = ()=>{
  /* - 여러개의 useState를 만들어 사용하는 법
     - 한개의 useState로 여러개의 state를 만드는건 ExpenseFormOneStateEX.js참고 */
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;