import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: "299.9",
      date: new Date(2021, 21, 6),
    },
    {
      title: "Bike Insurance",
      amount: "199.9",
      date: new Date(2022, 23, 8),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
