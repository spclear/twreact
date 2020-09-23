import React from 'react';
import './App.css';
import Header from './Header/Header';
import PostAdd from './Main/PostAdd/PostAdd';
import PostList from './Main/PostsList/PostList';

const App = () => {
  return (
    <div className="appWrapper">
      <Header
        currentUser="Sasha Plotnikov"
        postsCount="3"
        postsLiked="1"
      />
      <PostList />
      <PostAdd />
    </div>
  );
};

export default App;
