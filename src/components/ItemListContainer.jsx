import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import data from '../data.json'; 
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ addToCart, filter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (filter) {
      const filteredItems = data.filter(item => item.description.includes(filter));
      setItems(filteredItems);
    } else {
      setItems(data);
    }
  }, [filter]);

  return (
    <div className="item-list-container">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemListContainer;