import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  // const [expenses, setExpenses] = useState(props.items);

  const filterExpensesHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === parseInt(selectedYear));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterExpenses={filterExpensesHandler}
          selected={selectedYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />))}
      </Card>
    </div>
  );
};

export default Expenses;
