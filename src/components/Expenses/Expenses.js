import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const onSelectedYear = (selected) => {
    setSelectedYear(selected);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == selectedYear;
  });

  

  return (
    <Card>
      <ExpensesFilter selected={onSelectedYear} />
      <ExpensesChart expenses={filterdExpenses}/>
     <ExpensesList items={filterdExpenses}/>


    </Card>
  );
};

export default Expenses;
