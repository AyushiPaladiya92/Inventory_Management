import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import InventoryList from './InventoryList';
import { useInventory } from '../context/InventoryContext';

const Dashboard = () => {
  const { inventoryItems, deleteInventoryItem } = useInventory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSupplier, setFilterSupplier] = useState('');

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || item.category === filterCategory) &&
    (filterSupplier === '' || item.supplier === filterSupplier)
  );

  const categories = [...new Set(inventoryItems.map(item => item.category))];
  const suppliers = [...new Set(inventoryItems.map(item => item.supplier))];

  return (
    <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-md transition duration-300 hover:shadow-xl">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">Inventory Dashboard</h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full border border-gray-300 p-3 pl-10 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <AdjustmentsHorizontalIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            className="w-full border border-gray-300 p-3 pl-10 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <BuildingStorefrontIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            className="w-full border border-gray-300 p-3 pl-10 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
            value={filterSupplier}
            onChange={(e) => setFilterSupplier(e.target.value)}
          >
            <option value="">All Suppliers</option>
            {suppliers.map(supplier => (
              <option key={supplier} value={supplier}>{supplier}</option>
            ))}
          </select>
        </div>
        <Link
          to="/add-item"
          className="flex items-center justify-center bg-indigo-600 text-white p-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-200"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add New Item
        </Link>
      </div>
      <InventoryList items={filteredItems} deleteInventoryItem={deleteInventoryItem} />
    </div>
  );
};

export default Dashboard;
