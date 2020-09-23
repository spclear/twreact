import React from 'react';
import styles from './postadd.module.css';

const PostAdd = (props) => {
  return (
    <div className={styles.addPostWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="What's new?"
      />
      <button className={styles.button}>Post</button>
    </div>
  )
}

export default PostAdd;