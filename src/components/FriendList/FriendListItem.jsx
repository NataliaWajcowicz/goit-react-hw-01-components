import css from './style.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
    return(
        <li className={css.friendsListItem}>
            {friends.isOnline === true ? (
                <span className={css.online}></span>)
            :(<span className={css.offline}></span>)}
            <img className={css.friendPicture} src={friends.avatar} alt="User avatar" width="48" />
            <p className={css.friendName}>{friends.name}</p>
        </li>)
    
};

FriendListItem.propTypes = {
    friends: PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
    })

};

export { FriendListItem };