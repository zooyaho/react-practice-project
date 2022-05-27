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

  const submitHandler = (event)=>{
    // <form onSubmit={submitHandler}>에서 버튼으로 submit할 경우, 폼 데이터가 서버로 전달되면서 페이지가 다시 로드됨.
    // 여기서 우리는 서버로 보낼것이 아니기 때문에 이 현상을 방지하기 위해 preventDefault()를 사용하는 것.
    // 서버로 요청이 보내지지 않아 페이지가 로드되지 않음~!
    event.preventDefault();

    // 세개의 state값을 객체로 합침.
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);

    // 폼요소 초기화
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;