import React from 'react';
import styles from './header.module.css';
import SearchPanel from './SearchPanel/SearchPanel';

const Header = ({ currentUser, postsCount, postsLiked, ...props }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.userTitle}>{currentUser}</h1>
      <p className={styles.postsInfo}>
          posts: {postsCount}, liked: {postsLiked}
      </p>
      <SearchPanel
        likeFilter={props.likeFilter}
        textFilter={props.textFilter}
      />
    </div>
  )
}

export default Header;