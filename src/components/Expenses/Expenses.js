import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from '../Expenses/ExpensesChart';
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
