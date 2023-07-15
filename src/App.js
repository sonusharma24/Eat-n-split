import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import BillSplitForm from "./components/BillSplitForm";
import Button from "./components/Button";
import Friends from "./components/Friends";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends />
          {isOpen && <AddFriendForm />}

          <Button>Add Friend</Button>
        </div>
        <BillSplitForm />
      </div>
    </>
  );
}

export default App;
