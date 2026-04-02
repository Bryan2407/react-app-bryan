import ExpenseCard from "./components/ExpenseCard";
import expenses from "./data/expenses";

function App() {
  return (
    <div className="min-h-screen bg-purple-200 p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center underline decoration-blue mb-10">
        Expenses
      </h1>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-8">
        {expenses.map((item) => (
          <ExpenseCard
            key={item.id}
            name={item.name}
            type={item.type}
            amount={item.amount}
          />
        ))}
      </div>

    </div>
  );
}

export default App;