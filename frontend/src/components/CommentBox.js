import React, { useState } from 'react';

const CommentBox = ({ onComment }) => {
  const [text, setText] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onComment(text); setText(''); }} className="flex gap-2 mt-2">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a comment..."
        className="border rounded px-2 py-1 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Post</button>
    </form>
  );
};

export default CommentBox;