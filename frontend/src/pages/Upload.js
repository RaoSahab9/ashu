import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    try {
      await axios.post('/api/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Post uploaded!');
      setImage(null);
      setCaption('');
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Post</h2>
      {message && <div className="mb-2">{message}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
        <input type="text" placeholder="Caption" value={caption} onChange={e => setCaption(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default Upload;