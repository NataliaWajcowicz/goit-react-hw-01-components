import React from 'react';
import friends from './friends.json';
import { FriendListItem } from './FriendListItem';

const FriendList = props => (
    <ul>
        {friends.map(friend => (
            <FriendListItem key={friend.id} friends={friend} />
        ))}
        
    </ul>
    
);

export { FriendList };

