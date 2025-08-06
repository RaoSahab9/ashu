import React from 'react';

const PostCard = ({ post }) => (
  <div className="bg-white rounded shadow p-4 mb-4">
    <div className="flex items-center mb-2">
      <img src={post.user.avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
      <span className="font-semibold">{post.user.username}</span>
    </div>
    <img src={post.image} alt="post" className="w-full rounded mb-2" />
    <div className="mb-2">{post.caption}</div>
    <div className="flex items-center gap-4 mb-2">
      <span>❤️ {post.likes.length}</span>
      <span>💬 {post.comments.length}</span>
    </div>
    <div>
      {post.comments.slice(0, 2).map((c, i) => (
        <div key={i} className="text-sm"><b>{c.user.username}:</b> {c.text}</div>
      ))}
    </div>
  </div>
);

export default PostCard;