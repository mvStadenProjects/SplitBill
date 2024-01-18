import Friend from "./Friend";

function FriendsList({
  initialFriends,
  onSelection,
  selectedFriend,
}) {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          //If your component don't really need the prop
          //You call this prop drilling.
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
