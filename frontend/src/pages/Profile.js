import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${username}`);
      setUser(res.data);
      // Optionally fetch posts by user
      const postsRes = await axios.get('/api/posts/feed');
      setPosts(postsRes.data.filter(p => p.user.username === username));
    };
    fetchProfile();
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-lg mx-auto mt-6">
      <div className="bg-white rounded shadow p-4 mb-4">
        <div className="flex items-center mb-2">
          <img src={user.avatar} alt="avatar" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <div className="text-xl font-bold">{user.username}</div>
            <div className="text-gray-600">{user.bio}</div>
            <div className="flex gap-4 mt-2">
              <span><b>{user.followers.length}</b> Followers</span>
              <span><b>{user.following.length}</b> Following</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Profile;