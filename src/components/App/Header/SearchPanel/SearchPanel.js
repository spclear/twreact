import React, { useRef } from 'react';
import styles from './searchpanel.module.css';

const SearchPanel = (props) => {
  const input = useRef(null);
  const allBtn = useRef(null);
  const likeBtn = useRef(null);

  const textFilter = () => {
    props.textFilter(input.current.value.toLowerCase())
  }

  const onBtnClick = (prev, curr, value) => {
    prev.current.classList.remove(styles.active);
    curr.current.classList.add(styles.active);
    props.likeFilter(value)
  }

  return (
    <div className={styles.searchWrapper}>
      <input
        ref={input}
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        onChange={textFilter}
      />
      <button
        ref={allBtn}
        className={`${styles.button} ${styles.active}`}
        onClick={() => onBtnClick(likeBtn, allBtn, false)}
      >
        All
      </button>
      <button
        ref={likeBtn}
        className={`${styles.button}`}
        onClick={() => onBtnClick(allBtn,likeBtn, true)}
      >
        Liked
      </button>
    </div>
  )
}

export default SearchPanel;