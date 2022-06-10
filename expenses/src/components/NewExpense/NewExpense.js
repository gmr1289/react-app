import React from "react";
import "./NewExpense.css";

const NewExpense = () => {
  const inputtitle = () => {
    console.log("Title Changed");
  };
  return (
    <div className="new-expense">
      <form>
        <div className="Expense-form">
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange={inputtitle} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" min="2000-01-01" max="2021-12-31" />
            </div>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
