import React from 'react';
import './App.css';
import Header from './Header/Header';
import PostAdd from './Main/PostAdd/PostAdd';
import PostList from './Main/PostsList/PostList';

const App = () => {
  const postsData = [
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

  return (
    <div className="appWrapper">
      <Header
        currentUser="Sasha Plotnikov"
        postsCount="3"
        postsLiked="1"
      />
      <PostList postsData={postsData} />
      <PostAdd />
    </div>
  );
};

export default App;
