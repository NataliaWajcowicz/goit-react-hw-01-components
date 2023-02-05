import React from 'react';
import friends from './friends.json';
import { FriendListItem } from './FriendListItem';
import css from './style.module.css';

const FriendList = props => (
    <ul className={css.friendsList}>
        {friends.map(friend => (
            <FriendListItem key={friend.id} friends={friend} />
        ))}

        
    </ul>
    
);

export { FriendList };

