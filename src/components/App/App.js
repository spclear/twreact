import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import PostAdd from './Main/PostAdd/PostAdd';
import PostList from './Main/PostsList/PostList';

const App = () => {
  let postsData = [
    {
      postText: "Learning JavaScript and ReactJS right now",
      isLiked: true, 
      isStarred: true,
      id: 1,
    },
    {
      postText: "4 hours left. Hope i'll get there in time",
      isLiked: true, 
      isStarred: true,
      id: 2,
    },
    {
      postText: "Creating another react app...",
      isLiked: false, 
      isStarred: false,
      id: 3,
    },
  ];

  const [data, setData] = useState([...postsData]);
  const [likeFilter, setLikeFilter] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  
  const postsLiked = data.reduce((acc, curr) => {
    return curr.isLiked ? ++acc : acc;
  }, 0);

  const deletePost = (id) => {
    setData(data => data.filter(item => item.id !== id));
  }

  const toggleLike = (id) => {
    setData(data => data.map(item => {
      return item.id === id
        ? { ...item, isLiked: !item.isLiked }
        : item;
    }));
  }

  const toggleStar = (id) => {
    setData(data => data.map(item => {
      return item.id === id
        ? { ...item, isStarred: !item.isStarred }
        : item;
    }));
  }

  const addPost = (postText) => {
    setData(data => {
      const newPost = {
        postText,
        isLiked: false,
        isStarred: false,
        id: data.length + 1,
      };

      return [...data, newPost];
    })
  }

  const filterData = (data) => {
    let incData = [...data];

    if (likeFilter) {
      incData = incData.filter(item => item.isLiked);
    }

    return incData.filter(item => item.postText.toLowerCase().includes(textFilter));
  }

  const onLikeFilter = (value) => {
    setLikeFilter(value);
  }

  const onTextFilter = (value) => {
    setTextFilter(value)
  }

  return (
    <div className="appWrapper">
      <Header
        currentUser="Sasha Plotnikov"
        postsCount={data.length}
        postsLiked={postsLiked}
        likeFilter={onLikeFilter}
        textFilter={onTextFilter}
      />
      <PostList
        postsData={filterData(data)}
        onPostDelete={deletePost}
        onPostLike={toggleLike}
        onPostStar={toggleStar}
      />
      <PostAdd
        onPostAdd={addPost}
      />
    </div>
  );
};

export default App;
