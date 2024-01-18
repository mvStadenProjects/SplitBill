import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 1,
    name: "Mione",
    image: "https://i.pravatar.cc/48?u=1",
    balance: -8,
  },
  {
    id: 2,
    name: "Jean",
    image: "https://i.pravatar.cc/48?u=2",
    balance: 20,
  },
  {
    id: 3,
    name: "Nicolene",
    image: "https://i.pravatar.cc/48?u=3",
    balance: 0,
  },
];

function App() {
  //Add state for formAddfriend in app because that's were we display it
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] =
    useState(false);

  //Setting state for displaying showaddfriend form
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  
  //handleAddFriend receives friend object for the new friend being added
  function handleAddFriend(friend) {
    //takes current friends create new array and spread the current friends into it and add new friend into it.
    setFriends((friends) => [...friends, friend]);
    //Hides the add friend form when done adding a friend.
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);

    setSelectedFriend((currentFriend) =>
      currentFriend.id === friend.id ? false : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friends, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add a friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;