/* 비용데이터 모으는 폼 컴포넌트*/
import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = ()=>{
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });
  // 한개의 useState로 여러개의 state를 정의할 때, 한개의 state만 변경할 경우 모든 state의 값을 지정하고 업데이트 해야함!!, 전 값이 유지되는게 아니라 아예 업데이트되기 때문 -> 스프레드 연산자로 해결!@@

  /*  setUserInput(): 두가지 state업데이트 하는 방법이 있음. */
  const titleChangeHandler = (event)=>{
    /* 1. 최신 state값 업데이트 */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    /* 2. 이전 state값에 의존하여 state 업데이트, 새로운 state를 반환함. */
    setUserInput((prevState)=>{ // prevState인수로 들어옴
      return { ...prevState, enteredTitle: event.target.value }; // newState를 반환
    });
  };
  const dateChangeHandler = (event)=>{
    setUserInput((prevState)=>{
      return {...prevState, enteredDate: event.target.value};
    });
  };
  const amountChangeHandler = (event)=>{
    setUserInput((prevState)=>{
      return {...prevState, enteredAmount: event.target.value};
    });
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