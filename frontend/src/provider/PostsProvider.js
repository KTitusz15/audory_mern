// PostsProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostsContext from '../context/PostContext';

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const createPost = async (newPostData) => {
    try {
      const response = await axios.post('/api/posts', newPostData);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error creating post:', error);
      throw error; // Propagate error to the component
    }
  };

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
