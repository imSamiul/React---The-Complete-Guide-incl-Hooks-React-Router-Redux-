import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let noExpenses = (
    <h2 className="expenses-list__fallback">No expenses are made.</h2>
  );
  const showExpenses =
    props.filteredExpenses.length > 0
      ? props.filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))
      : noExpenses;
  return <ul className="expenses-list">{showExpenses}</ul>;
};
export default ExpenseList;
