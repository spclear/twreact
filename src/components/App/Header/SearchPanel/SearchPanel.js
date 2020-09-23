import React from 'react';
import styles from './searchpanel.module.css';

const SearchPanel = (props) => {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
      />
      <button className={`${styles.button} ${styles.active}`}>All</button>
      <button className={`${styles.button}`}>Liked</button>
    </div>
  )
}

export default SearchPanel;