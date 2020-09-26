import React, { useState } from 'react';
import styles from './postitem.module.css';

const PostItem = ({ postText, isLiked, isStarred }) => {
  const [starred, setStarred] = useState(isStarred);
  const [liked, setLiked] = useState(isLiked);

  const starredClass = starred ? ` ${styles.starred}` : '';
  const likedClass = liked ? ` ${styles.liked}` : '';

  const onToggleStar = () => {
    setStarred(prev => !prev);
  }

  const onToggleLike = () => {
    setLiked(prev => !prev);
  }

  return (
    <div className={styles.item}>
      <p
        className={`${styles.postText}${starredClass}`}
        onClick={onToggleLike}
      >
        {postText}
      </p>
      <div className={styles.options}>
        <button
          className={`${styles.star}${starredClass}`}
          onClick={onToggleStar}
        >
          <i className="fa fa-star"/>
        </button>
        <button className={`${styles.delete}`}>
          <i className="fa fa-trash"/>
        </button>
        <i className={`${styles.heart}${likedClass} fa fa-heart`} />
      </div>
    </div>
  )
}

export default PostItem;