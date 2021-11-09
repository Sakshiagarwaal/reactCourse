import React, { useState } from "react";

import "./ExpensesAdd.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../FilterExpense/DropDown";

function ExpensesAdd(props) {
  const [filter, setFilter] = useState();
  const dropDownHandler = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };
  console.log("prop" , props.items.filter(expense=>console.log(expense?.date?.getFullYear(),filter)));
  return (
    <div>
      <Card className="expense">
      
        <ExpensesFilter dropDownHandler={dropDownHandler} />
      

      {/* {props.items.map((expense) => (
        <ExpenseItem
          key ={expense.id}s
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      {props.items.filter(expense=>expense?.date?.getFullYear()==filter).map((expense) => (
        <ExpenseItem
          key ={expense.id}s
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </Card>
    </div>
  );
};

export default ExpensesAdd;
