import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const imageUrl = "https://i.pravatar.cc/48";
  const [name, setName] = useState("");
  const [image, setImage] = useState(imageUrl);

  const id = crypto.randomUUID();
  function handleAddSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      //attach specific image to user with the ID.
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriend);

    setName("");
    setImage(imageUrl);
  }

  return (
    <form
      className="form-add-friend"
      onSubmit={handleAddSubmit}
    >
      <label>🧑🏻‍🤝‍👨 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">🌄Image Url</label>
      <input
        type="text"
        value={image}
        //e.target.value gets the value of the input when you type.
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
