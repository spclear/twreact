import React from 'react';
import styles from './header.module.css';
import SearchPanel from './SearchPanel/SearchPanel';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.userTitle}>{props.currentUser}</h1>
      <p className={styles.postsInfo}>
          posts: {props.postsCount}, liked: {props.postsLiked}
      </p>
      <SearchPanel />
    </div>
  )
}

export default Header;