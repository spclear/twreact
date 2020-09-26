import React from 'react';
import styles from './postitem.module.css';

const PostItem = ({ postText, isLiked, isStarred, ...props }) => {
  const starredClass = isStarred ? ` ${styles.starred}` : '';
  const likedClass = isLiked ? ` ${styles.liked}` : '';

  const onToggleStar = () => {
    props.onPostStar();
  }
  const onToggleLike = () => {
    props.onPostLike();
  }
  const onPostDelete = () => {
    props.onPostDelete();
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
        <button
          className={`${styles.delete}`}
          onClick={onPostDelete}
        >
          <i className="fa fa-trash"/>
        </button>
        <i className={`${styles.heart}${likedClass} fa fa-heart`} />
      </div>
    </div>
  )
}

export default PostItem;