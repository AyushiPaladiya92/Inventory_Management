import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardDocumentIcon, CubeIcon, TagIcon, UserCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

const InventoryForm = ({ addInventoryItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: '',
    supplier: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addInventoryItem === 'function') {
      addInventoryItem(formData);
      setFormData({
        name: '',
        quantity: '',
        category: '',
        supplier: '',
      });
      alert('Item added successfully!');
      navigate('/');
    } else {
      console.error('addInventoryItem is not a function');
      alert('Error: Unable to add item.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-br from-fuchsia-50 to-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-fuchsia-800 flex items-center space-x-2 mb-8">
        <ClipboardDocumentIcon className="w-8 h-8 text-fuchsia-500" />
        <span>Add Inventory Item</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
            Item Name
          </label>
          <div className="flex items-center border-b-2 border-fuchsia-500 focus-within:border-fuchsia-700 py-1">
            <CubeIcon className="w-5 h-5 text-fuchsia-500 mr-2" />
            <input
              className="w-full bg-transparent text-gray-800 outline-none px-2"
              id="name"
              type="text"
              placeholder="Enter item name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="quantity">
            Quantity
          </label>
          <div className="flex items-center border-b-2 border-fuchsia-500 focus-within:border-fuchsia-700 py-1">
            <TagIcon className="w-5 h-5 text-fuchsia-500 mr-2" />
            <input
              className="w-full bg-transparent text-gray-800 outline-none px-2"
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="category">
            Category
          </label>
          <div className="flex items-center border-b-2 border-fuchsia-500 focus-within:border-fuchsia-700 py-1">
            <TagIcon className="w-5 h-5 text-fuchsia-500 mr-2" />
            <select
              className="w-full bg-transparent text-gray-800 outline-none px-2"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="supplier">
            Supplier
          </label>
          <div className="flex items-center border-b-2 border-fuchsia-500 focus-within:border-fuchsia-700 py-1">
            <UserCircleIcon className="w-5 h-5 text-fuchsia-500 mr-2" />
            <input
              className="w-full bg-transparent text-gray-800 outline-none px-2"
              id="supplier"
              type="text"
              placeholder="Enter supplier name"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
        >
          <PlusCircleIcon className="w-5 h-5" />
          <span>Add Item</span>
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
