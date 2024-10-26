import React from 'react';
import { Link } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CubeIcon } from '@heroicons/react/24/solid';

const InventoryList = ({ items, deleteInventoryItem }) => {
  const getStockLevelColor = (quantity) => {
    if (quantity <= 10) return 'bg-red-500';
    if (quantity <= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-gradient-to-tr from-fuchsia-50 to-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-fuchsia-600 text-white uppercase text-sm font-semibold">
            <th className="py-4 px-6 text-left">Name</th>
            <th className="py-4 px-6 text-left">Quantity</th>
            <th className="py-4 px-6 text-left">Category</th>
            <th className="py-4 px-6 text-left">Supplier</th>
            <th className="py-4 px-6 text-left">Stock Level</th>
            <th className="py-4 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-medium">
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 hover:bg-fuchsia-100 transition duration-150 ease-in-out">
              <td className="py-4 px-6 text-left flex items-center space-x-2">
                <CubeIcon className="w-5 h-5 text-fuchsia-600" />
                <span>{item.name}</span>
              </td>
              <td className="py-4 px-6 text-left">{item.quantity}</td>
              <td className="py-4 px-6 text-left">{item.category}</td>
              <td className="py-4 px-6 text-left">{item.supplier}</td>
              <td className="py-4 px-6 text-left">
                <span className={`${getStockLevelColor(item.quantity)} text-white py-1 px-3 rounded-full text-xs inline-flex items-center`}>
                  <CubeIcon className="w-4 h-4 mr-1" />
                  {item.quantity <= 10 ? 'Low' : item.quantity <= 50 ? 'Medium' : 'Sufficient'}
                </span>
              </td>
              <td className="py-4 px-6 text-left flex space-x-4">
                <Link to={`/edit-item/${item.id}`} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 transition duration-200">
                  <PencilSquareIcon className="w-5 h-5" />
                  <span>Edit</span>
                </Link>
                <button onClick={() => deleteInventoryItem(item.id)} className="text-red-600 hover:text-red-800 flex items-center space-x-1 transition duration-200">
                  <TrashIcon className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
