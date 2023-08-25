import React from 'react';
import App from './App';
import { useContext, useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext({
  title: '',
  setTitle: (data: any) => {},
  categories: [],
  setCategories: (data: any) => {},
  description: '',
  setDescription: (data: any) => {},
  purchasePrice: 0,
  setPurchasePrice: (data: any) => {},
  rent: 0,
  setRent: (data: any) => {},
  rentType: '',
  setRentType: (data: any) => {},
});

const MainApp = () => {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [rent, setRent] = useState(0);
  const [rentType, setRentType] = useState('');

  return (
    <>
      <ProductContext.Provider
        value={{
          title,
          setTitle,
          categories,
          setCategories,
          description,
          setDescription,
          purchasePrice,
          setPurchasePrice,
          rent,
          setRent,
          rentType,
          setRentType,
        }}
      >
        <App />
      </ProductContext.Provider>
    </>
  );
};

export default MainApp;
