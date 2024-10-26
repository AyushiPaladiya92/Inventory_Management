import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-fuchsia-950 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          
          {/* Logo and Title */}
          <Link to="/" className="text-2xl font-extrabold flex items-center space-x-3 hover:text-indigo-400 transition duration-200">
            <HomeIcon className="w-8 h-8 text-indigo-300" />
            <span className="tracking-wide text-indigo-300">Inventra</span>
          </Link>
          
          {/* Navigation Links */}
          <ul className="flex space-x-8 text-gray-300">
            <li>
              <Link to="/" className="flex items-center space-x-2 hover:text-indigo-400 transition duration-200">
                <HomeIcon className="w-6 h-6" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/add-item" className="flex items-center space-x-2 hover:text-indigo-400 transition duration-200">
                <PlusCircleIcon className="w-6 h-6" />
                <span className="font-medium">Add Item</span>
              </Link>
            </li>
            <li>
              <Link to="/suppliers" className="flex items-center space-x-2 hover:text-indigo-400 transition duration-200">
                <BuildingStorefrontIcon className="w-6 h-6" />
                <span className="font-medium">Suppliers</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
