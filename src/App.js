import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: "299.9",
    date: new Date(2021, 8, 7),
  },
  {
    id: 2,
    title: "Bike Insurance",
    amount: "199.9",
    date: new Date(2019, 5, 12),
  },
  {
    id: 3,
    title: "Life Insurance",
    amount: "99.9",
    date: new Date(2021, 3, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
