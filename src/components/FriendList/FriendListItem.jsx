
const FriendListItem = ({ friends }) => (
    <li>
        <span>{friends.isOnline }</span>
        <img src={friends.avatar} alt="User avatar" width="48" />
        <p>{ friends.name}</p>
    </li>
);

export { FriendListItem };