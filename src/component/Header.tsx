// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-gray-200">
      
        <Link to="/" className="mr-4 text-xl font-bold text-blue-600 hover:text-blue-800">Home</Link>
        <Link to="/new-page" className="text-xl font-bold text-blue-600 hover:text-blue-800">New Page</Link>
      
    </nav>
  );
};

export default Header;
