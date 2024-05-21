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
  const [filter, setFilter] = useState('');

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

const removeFromCart = (itemId) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== itemId)
  );
};

const handleFilterChange = (newFilter) => {
 setFilter(newFilter);
};

const handleAllFilter = () => {
  setFilter('');
};


return (
  <Router>
    <NavBar cartItems={cartItems} />
    <div className="button-container">
      <button className="filter-button" onClick={handleAllFilter}>All</button>
      <button className="filter-button" onClick={() => handleFilterChange('PS4')}>PS4</button>
      <button className="filter-button" onClick={() => handleFilterChange('PC')}>PC</button>
      <button className="filter-button" onClick={() => handleFilterChange('PS1')}>PS1</button>
      <button className="filter-button" onClick={() => handleFilterChange('PS3')}>PS3</button>
    </div>
    <Routes>
      <Route
        path="/"
        element={<ItemListContainer addToCart={addToCart} filter={filter} />}
      />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
    </Routes>
  </Router>
);
};

export default App;