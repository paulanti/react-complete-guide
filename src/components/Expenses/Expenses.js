import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filterExpensesHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterExpenses={filterExpensesHandler}
          selected={selectedYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />))}
      </Card>
    </div>
  );
};

export default Expenses;
