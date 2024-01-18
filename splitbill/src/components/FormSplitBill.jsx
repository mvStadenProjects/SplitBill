import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  //Bill is a string because input is text elements (which are strings)
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function calcFriendExpense(e) {
    const expense = Number(e.target.value);
    setPaidByUser(expense > bill ? paidByUser : expense);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(
      whoIsPaying === "user" ? paidByFriend : -paidByUser
    );
  }
  return (
    <form
      className="form-split-bill"
      onSubmit={handleSubmit}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️Your expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={calcFriendExpense}
      />
      <label>🧑🏻‍🤝‍👨{selectedFriend.name} expenses</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">
          {selectedFriend.name}
        </option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
