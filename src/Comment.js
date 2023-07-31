import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <h4>{comment.email}</h4>
      <br />
    </div>
  );
};

export default Comment;
