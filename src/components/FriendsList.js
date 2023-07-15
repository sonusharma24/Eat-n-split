import React from "react";
import Button from "./Button";

const FriendsList = ({ friend }) => {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="red">
            {" "}
            you owe {friend.name} {friend.balance}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="green">
            {" "}
            {friend.name} owe you {friend.balance}
          </p>
        )}
        {friend.balance === 0 && <p> you and {friend.name} is even</p>}

        <Button>Select</Button>
      </li>
    </>
  );
};

export default FriendsList;
