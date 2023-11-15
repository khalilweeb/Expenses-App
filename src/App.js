import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
 


  const  [expenses , setExpense] = useState( [
    {id:"e1", title: "car insurence", date: new Date(2020, 2, 2), amount: 255.0 },
    {id:"e2", title: "toilet paper", date: new Date(2020, 5, 2), amount: 45.0 },
    {id:"e3", title: "phone charges", date: new Date(2020, 9, 2), amount: 9.0 },
    {id:"e4", title: "transport", date: new Date(2012, 9, 26), amount: 123.0 },
  ]);

  const addExpenseHandler = (expense)  => { 

    setExpense((prevExpenses) => [expense, ...expenses])


  }

  return (
    <div className="App">
      <NewExpense  onSaveNewExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
