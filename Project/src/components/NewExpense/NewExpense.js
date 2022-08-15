import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isTyping, setTyping] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const onTyping = () => {
    setTyping(true);
  };
  const cancelTypingHandler = () => {
    setTyping(false);
  };
  let button;
  if (!isTyping) {
    button = <button onClick={onTyping}>Add New Expese</button>;
  } else {
    button = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        cancelTyping={cancelTypingHandler}
      />
    );
  }

  return <div className="new-expense">{button}</div>;
};

export default NewExpense;
