import React from 'react';
import styles from './header.module.css';
import SearchPanel from './SearchPanel/SearchPanel';

const Header = ({ currentUser, postsCount, postsLiked }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.userTitle}>{currentUser}</h1>
      <p className={styles.postsInfo}>
          posts: {postsCount}, liked: {postsLiked}
      </p>
      <SearchPanel />
    </div>
  )
}

export default Header;