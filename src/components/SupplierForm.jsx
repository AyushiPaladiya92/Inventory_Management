import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupplier } from '../context/SupplierContext';
import { UserCircleIcon, PhoneIcon, TagIcon } from '@heroicons/react/24/outline';

const SupplierForm = () => {
  const navigate = useNavigate();
  const { addSupplier } = useSupplier();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    items: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSupplier({
      ...formData,
      items: formData.items.split(',').map(item => item.trim()),
    });
    navigate('/suppliers');
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-fuchsia-50 to-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <UserCircleIcon className="w-6 h-6 text-fuchsia-600 mr-2" />
        Add New Supplier
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Supplier Name
          </label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-150"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter supplier name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            <PhoneIcon className="inline w-5 h-5 text-fuchsia-600 mr-1" />
            Contact Details
          </label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-150"
            id="contact"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Enter contact details"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="items">
            <TagIcon className="inline w-5 h-5 text-fuchsia-600 mr-1" />
            Items Supplied (comma-separated)
          </label>
          <input
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition duration-150"
            id="items"
            type="text"
            name="items"
            value={formData.items}
            onChange={handleChange}
            required
            placeholder="Enter items supplied"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition duration-150"
            type="submit"
          >
            Add Supplier
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierForm;
