import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    });
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: '', enteredTitle: '', enteredAmount: '' }
    });
    setShowForm((prevState) => { return !prevState });
  };

  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm((prevState) => { return !prevState });
  };

  if (showForm) {
    return <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={showFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  }
  return <form onSubmit={showFormHandler}>
    <div className="new-expense__control">
      <button type="submit">Add New Expense</button>
    </div>
  </form>
};

export default ExpenseForm;
