import React from "react";
import FriendsList from "./FriendsList";

const Friends = ({ isSelected, friendList, selectionHandler }) => {
  return (
    <ul>
      {friendList.map((friend) => {
        return (
          <FriendsList
            isSelected={isSelected}
            selectionHandler={selectionHandler}
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </ul>
  );
};

export default Friends;
