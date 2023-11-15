import Chart from "../chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { value: 0, lable: "jan" },
    { value: 0, lable: "Feb" },
    { value: 0, lable: "Mar" },
    { value: 0, lable: "Apr" },
    { value: 0, lable: "May" },
    { value: 0, lable: "Jun" },
    { value: 0, lable: "Jul" },
    { value: 0, lable: "Aug" },
    { value: 0, lable: "Sep" },
    { value: 0, lable: "Oct" },
    { value: 0, lable: "Nov" },
    { value: 0, lable: "Dec" }
];

    for(const expense of props.expenses) {
        const expenseMounth = expense.date.getMonth();
        chartDataPoints[expenseMounth].value += expense.amount
    }

  return <Chart  dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
