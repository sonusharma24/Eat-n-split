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

  const addFriendHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const friendListHandler = (friend) => {
    setFriendList((prev) => [...prev, friend]);
  };
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends friendList={friendList} />
          {isOpen && <AddFriendForm friendListHandler={friendListHandler} />}

          <Button addFriendHandler={addFriendHandler}>
            {isOpen ? "close" : "Add Friend"}
          </Button>
        </div>
        <BillSplitForm />
      </div>
    </>
  );
}

export default App;
