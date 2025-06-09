import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-gray-200 p-4">
      <div>
        <div>
          <Link to="/addPost">Add Post</Link>
        </div>
        <div>
          <Link to="/addCategory">Add Category</Link>
        </div>
        <div>
          <Link to="/postJob">Post Job</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
