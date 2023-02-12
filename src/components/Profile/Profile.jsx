import React from 'react';
import user from './user.json';
import css from './style.module.css';
import PropTypes from 'prop-types';


const Profile = props => (
  <div className={css.profile}>
    <div>
      <img
        className={css.avatar}
        src={user.avatar}
        alt="User avatar"
      
      />
      <p className={css.username}>{user.username}</p>
      <p className={css.tag}>@{user.tag}</p>
      <p className={css.location}>{user.location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <span className={css.statsTitle}>Followers</span>
        <span className={css.statsQuantity}>{user.stats.followers}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsTitle}>Views</span>
        <span className={css.statsQuantity}>{user.stats.views}</span>
      </li>
      <li className={css.statsItem}>
        <span className={css.statsTitle}>Likes</span>
        <span className={css.statsQuantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>);

Profile.propTypes = {
  props: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  })
};

export { Profile };

