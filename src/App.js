import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import Comment from './Comment';
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const fetchComments = (postId) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  };

  return (
    <div >
      <h1>Posts</h1>
      <div className='post-div' >
      {posts.map(post => (
        <div className='card' key={post.id}>
          <Post post={post} onShowComments={fetchComments} />
          {comments.map(comment => (
            comment.postId === post.id && <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default App;
/*className='post-div'*/ 