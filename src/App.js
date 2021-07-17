import Expenses from "./components/Expenses";

function App() {
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
  return (
    <div className="App">
      <h1> Expense Items</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
