import React from 'react';
import styles from './postlist.module.css';
import PostItem from './PostItem/PostItem';

const PostList = ({postsData, onPostDelete, onPostStar, onPostLike}) => {
  const posts = [...postsData].map(item => {
    const { id, ...itemProps } = item;
    return (
      <PostItem
        {...itemProps}
        key={id}
        onPostDelete={() => onPostDelete(id)}
        onPostLike={() => onPostLike(id)}
        onPostStar={() => onPostStar(id)}
      />
    ) 
  });

  return (
    <div className={styles.list}>
      { posts }
    </div>
  )
}

export default PostList