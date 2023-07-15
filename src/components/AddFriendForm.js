import React, { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ friendListHandler }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=4555");

  const id = crypto.randomUUID();

  const friendFormHandler = (e) => {
    e.preventDefault();
    const newFriends = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id: id,
    };
    friendListHandler(newFriends);
  };
  return (
    <>
      <form className="form-add-friend" onSubmit={friendFormHandler}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>ImageUrl</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default AddFriendForm;
