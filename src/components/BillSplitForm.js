import React from "react";
import Button from "./Button";

const BillSplitForm = ({ friends }) => {
  return (
    <form className="form-split-bill">
      <h2>Split Bill with {friends.name}</h2>
      <label>Bill</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>{friends.name} Expense</label>
      <input type="text" />

      <label>who is paying the bill</label>
      <select>
        <option value="user">user</option>
        <option value="friend">{friends.name}</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};

export default BillSplitForm;
