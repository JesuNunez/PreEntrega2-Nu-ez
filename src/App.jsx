import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(true);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevItems, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDescriptionClick = () => {
    setShowFilters(false);
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      {showFilters && (
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange('All')}>All</button>
          <button onClick={() => handleFilterChange('PS4')}>PS4</button>
          <button onClick={() => handleFilterChange('PC')}>PC</button>
          <button onClick={() => handleFilterChange('PS1')}>PS1</button>
          <button onClick={() => handleFilterChange('PS3')}>PS3</button>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer addToCart={addToCart} filter={filter} />}
        />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} handleDescriptionClick={handleDescriptionClick} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;