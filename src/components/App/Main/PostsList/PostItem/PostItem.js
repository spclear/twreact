import React from 'react';
import styles from './postitem.module.css';

const PostItem = (props) => {
  return (
    <div className={styles.item}>
      <p className={styles.postText}>
        {props.postText}
      </p>
      <div className={styles.options}>
        <button className={styles.star}>
          <i className="fa fa-star"/>
        </button>
        <button className={styles.delete}>
          <i className="fa fa-trash"/>
        </button>
        {
          props.isLiked && <i className={`${styles.heart} fa fa-heart`} />
        }
      </div>
    </div>
  )
}

export default PostItem;