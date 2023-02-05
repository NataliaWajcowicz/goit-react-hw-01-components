import css from './style.module.css';

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

export { FriendListItem };