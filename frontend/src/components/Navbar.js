import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold text-blue-500">Snapzy</Link>
    <div className="flex gap-4">
      <Link to="/" className="hover:text-blue-700">Feed</Link>
      <Link to="/upload" className="hover:text-blue-700">Upload</Link>
      <Link to="/profile/me" className="hover:text-blue-700">Profile</Link>
      <Link to="/login" className="hover:text-blue-700">Login</Link>
      <Link to="/register" className="hover:text-blue-700">Register</Link>
    </div>
  </nav>
);

export default Navbar;