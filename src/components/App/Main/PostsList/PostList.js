import React from 'react';
import styles from './postlist.module.css';
import PostItem from './PostItem/PostItem';

const PostList = (props) => {
  return (
    <div className={styles.list}>
      <PostItem
        postText="Learning JavaScript and ReactJS right now"
        isLiked={false}
      />
      <PostItem
        postText="4 hours left. Hope i'll get there in time"
        isLiked={true}
      />
      <PostItem
        postText="Creating another react app..."
        isLiked={true}
      />
    </div>
  )
}

export default PostList