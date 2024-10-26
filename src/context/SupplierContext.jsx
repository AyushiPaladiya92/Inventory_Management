import React, { createContext, useState, useContext } from 'react';

const SupplierContext = createContext();

export const useSupplier = () => useContext(SupplierContext);

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'TechCorp', contact: 'john@techcorp.com', items: ['Laptop', 'Wireless Mouse'] },
    { id: 2, name: 'FashionInc', contact: 'sarah@fashioninc.com', items: ['T-shirt'] },
    { id: 3, name: 'BeanBoost', contact: 'mike@beanboost.com', items: ['Coffee Beans'] },
      { id: 4, name: 'MobileTech', contact: 'alice@mobiletech.com', items: ['Smartphone', 'Tablet'] },
    { id: 5, name: 'OfficePro', contact: 'bob@officepro.com', items: ['Desk Chair', 'Office Desk'] },
    { id: 6, name: 'PaperCo', contact: 'charlie@paperco.com', items: ['Notebook', 'Drawing Pad'] },
    { id: 7, name: 'EcoGoods', contact: 'diana@ecogoods.com', items: ['Water Bottle', 'Reusable Straw'] },
    { id: 8, name: 'HealthySnacks', contact: 'elena@healthysnacks.com', items: ['Protein Bars', 'Granola Bars'] },
    { id: 9, name: 'BagMasters', contact: 'frank@bagmasters.com', items: ['Backpack', 'Travel Bag'] },
    { id: 10, name: 'GadgetHub', contact: 'grace@gadgethub.com', items: ['Smartwatch', 'Fitness Tracker'] },
    { id: 11, name: 'FitLife', contact: 'hannah@fitlife.com', items: ['Yoga Mat', 'Dumbbells'] },
    { id: 12, name: 'PhotoPros', contact: 'ian@photopros.com', items: ['Camera', 'Tripod'] },
    { id: 13, name: 'ArtSupplies', contact: 'julia@artsupplies.com', items: ['Canvas', 'Paint Set'] },
    { id: 14, name: 'BakeryWorld', contact: 'kyle@bakeryworld.com', items: ['Whole Wheat Bread', 'Croissants'] },
    { id: 15, name: 'GameZone', contact: 'laura@gamezone.com', items: ['Gaming Console', 'Headset'] },
  ]);

  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);
  };

  const updateSupplier = (updatedSupplier) => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === updatedSupplier.id ? updatedSupplier : supplier
    ));
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
  };

  const getSupplier = (id) => {
    return suppliers.find(supplier => supplier.id === id);
  };

  return (
    <SupplierContext.Provider value={{
      suppliers,
      addSupplier,
      updateSupplier,
      deleteSupplier,
      getSupplier
    }}>
      {children}
    </SupplierContext.Provider>
  );
};