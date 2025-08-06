import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/posts/feed', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(res.data);
    };
    fetchFeed();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-6">
      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;