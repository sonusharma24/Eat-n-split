import React from "react";
import FriendsList from "./FriendsList";

const Friends = ({ friendList }) => {
  return (
    <ul>
      {friendList.map((friend) => {
        return <FriendsList key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

export default Friends;
