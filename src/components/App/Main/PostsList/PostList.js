import React from 'react';
import styles from './postlist.module.css';
import PostItem from './PostItem/PostItem';

const PostList = (props) => {
  const posts = [...props.postsData].map((item, index) => {
    const { id, ...itemProps } = item;
    return <PostItem {...itemProps} key={id} />
  });

  return (
    <div className={styles.list}>
      { posts }
    </div>
  )
}

export default PostList