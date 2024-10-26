import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';
import { ClipboardDocumentListIcon, CubeIcon, TagIcon, UserCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const InventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getInventoryItem, updateInventoryItem } = useInventory();
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: '',
    supplier: '',
  });

  useEffect(() => {
    const item = getInventoryItem(parseInt(id));
    if (item) {
      setFormData(item);
    } else {
      navigate('/'); 
    }
  }, [id, getInventoryItem, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInventoryItem({ ...formData, id: parseInt(id) });
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-br from-fuchsia-50 to-white shadow-lg rounded-lg p-8 mb-6 mt-10">
      <h2 className="text-3xl font-bold text-fuchsia-800 flex items-center space-x-2 mb-8">
        <ClipboardDocumentListIcon className="w-8 h-8 text-fuchsia-500" />
        <span>Edit Inventory Item</span>
      </h2>
      
      <form onSubmit={handleSubmit}>
        {['name', 'quantity', 'category', 'supplier'].map((field, index) => (
          <div className="mb-6" key={index}>
            <label className={`block text-gray-700 font-semibold mb-1`} htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <div className="flex items-center border-b-2 border-fuchsia-500 focus-within:border-fuchsia-700 py-1">
              {field === 'name' && <CubeIcon className="w-5 h-5 text-fuchsia-500 mr-2" />}
              {field === 'quantity' && <TagIcon className="w-5 h-5 text-fuchsia-500 mr-2" />}
              {field === 'category' && <TagIcon className="w-5 h-5 text-fuchsia-500 mr-2" />}
              {field === 'supplier' && <UserCircleIcon className="w-5 h-5 text-fuchsia-500 mr-2" />}
              <input
                className="w-full bg-transparent text-gray-800 outline-none px-2 py-2 rounded-lg transition duration-200 focus:ring-2 focus:ring-fuchsia-500"
                id={field}
                type={field === 'quantity' ? 'number' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required
              />
            </div>
          </div>
        ))}
        
        <button
          type="submit"
          className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
        >
          <CheckCircleIcon className="w-5 h-5" />
          <span>Update Item</span>
        </button>
      </form>
    </div>
  );
};

export default InventoryEdit;
