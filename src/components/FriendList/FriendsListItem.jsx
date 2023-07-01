import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
