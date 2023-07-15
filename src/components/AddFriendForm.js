import React from "react";
import Button from "./Button";

const AddFriendForm = () => {
  return (
    <>
      <form className="form-add-friend">
        <label>Name</label>
        <input type="text" />
        <label>ImageUrl</label>
        <input type="text" />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default AddFriendForm;
