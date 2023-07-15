import React from "react";

const Button = ({ children, addFriendHandler }) => {
  return (
    <button className="button" onClick={addFriendHandler}>
      {children}
    </button>
  );
};

export default Button;
