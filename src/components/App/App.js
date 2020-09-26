import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import PostAdd from './Main/PostAdd/PostAdd';
import PostList from './Main/PostsList/PostList';

const App = () => {
  let postsData = [
    {
      postText: "Learning JavaScript and ReactJS right now",
      isLiked: false, 
      isStarred: true,
      id: 55710468,
    },
    {
      postText: "4 hours left. Hope i'll get there in time",
      isLiked: true, 
      isStarred: true,
      id: 14765641,
    },
    {
      postText: "Creating another react app...",
      isLiked: false, 
      isStarred: false,
      id: 64314576,
    },
  ];

  const [data, setData] = useState([...postsData]); 

  const deletePost = (id) => {
    const postId = data.findIndex(item => item.id === id);
    let newData = [...data];

    newData.splice(postId, 1);
    setData(newData);
  }

  return (
    <div className="appWrapper">
      <Header
        currentUser="Sasha Plotnikov"
        postsCount="3"
        postsLiked="1"
      />
      <PostList
        postsData={data}
        deletePost={deletePost}
      />
      <PostAdd />
    </div>
  );
};

export default App;
