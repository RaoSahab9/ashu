import React from 'react';

const LikeButton = ({ liked, onClick }) => (
  <button onClick={onClick} className={liked ? 'text-red-500' : 'text-gray-500'}>
    ❤️
  </button>
);

export default LikeButton;