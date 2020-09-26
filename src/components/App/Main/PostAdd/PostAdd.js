import React, { useRef } from 'react';
import styles from './postadd.module.css';

const PostAdd = (props) => {
  const input = useRef(null);

  const addPost = () => {
    props.onPostAdd(input.current.value);
    input.current.value = '';
  }

  return (
    <div className={styles.addPostWrapper}>
      <input
        ref={input}
        className={styles.input}
        type="text"
        placeholder="What's new?"
      />
      <button
        className={styles.button}
        onClick={addPost}
      >
        Post
      </button>
    </div>
  )
}

export default PostAdd;