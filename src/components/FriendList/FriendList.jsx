import FriendListItem from "components/FriendList/FriendsListItem";
import PropTypes from "prop-types";
import css from "components/FriendList/FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  id: PropTypes.string,
  friends: PropTypes.arrayOf(PropTypes.object),
};
