import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onChangeFilterHandler = (event) => {
    props.selected(event.target.value);
  };

  return (
    <div className="filter">
      <h2>Filter Expenses</h2>
      <select onChange={onChangeFilterHandler}>
        <option value="">get by year</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
