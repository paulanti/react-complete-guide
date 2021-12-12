import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 112.5,
      date: new Date(2022, 11, 12),
    },
    { id: 2, title: "Buckwheat", amount: 22.5, date: new Date(2022, 11, 12) },
    { id: 3, title: "Masks", amount: 11.2, date: new Date(2022, 11, 12) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
