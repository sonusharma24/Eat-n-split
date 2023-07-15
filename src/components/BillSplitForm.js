import React, { useState } from "react";
import Button from "./Button";

const BillSplitForm = ({ friends, onSplitBillHandler }) => {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = bill ? bill - myExpense : "";

  const handleForm = (e) => {
    e.preventDefault();
    if (!bill || !myExpense) return;

    onSplitBillHandler(whoIsPaying === "user" ? friendExpense : -myExpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleForm}>
      <h2>Split Bill with {friends.name}</h2>
      <label>Bill Value</label>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
      />

      <label>Your Expense</label>
      <input
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
        type="text"
        value={myExpense}
      />

      <label>{friends.name} Expense</label>
      <input disabled type="text" value={friendExpense} />

      <label>who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">user</option>
        <option value={friends.name}>{friends.name}</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};

export default BillSplitForm;
