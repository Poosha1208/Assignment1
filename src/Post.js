import React from 'react';
import "./App.css";
import TruncatedText from './TruncatedText';

const Post = ({ post, onShowComments }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <TruncatedText text={post.body}/>
      <div className='button'>
      <button onClick={() => onShowComments(post.id)} >View Comments</button>
      </div>
      
    </div>
  );
};

export default Post;
