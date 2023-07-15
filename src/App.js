import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import BillSplitForm from "./components/BillSplitForm";
import Button from "./components/Button";
import Friends from "./components/Friends";
import { initialFriends } from "./data";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [isSelected, setIsSelected] = useState(null);

  const addFriendHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const friendListHandler = (friend) => {
    setFriendList((prev) => [...prev, friend]);
    setIsOpen(false);
  };

  const selectionHandler = (friend) => {
    setIsSelected((prev) => (prev?.id === friend.id ? null : friend));
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends
            isSelected={isSelected}
            friendList={friendList}
            selectionHandler={selectionHandler}
          />
          {isOpen && <AddFriendForm friendListHandler={friendListHandler} />}

          <Button onClick={addFriendHandler}>
            {isOpen ? "close" : "Add Friend"}
          </Button>
        </div>
        {isSelected && <BillSplitForm friends={isSelected} />}
      </div>
    </>
  );
}

export default App;
