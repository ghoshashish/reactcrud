import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.delete(props.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div>
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
