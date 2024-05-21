import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import fetchMockData from '../async-mock';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ addToCart, filter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchMockData();
      setItems(data);
    };

    fetchItems();
  }, []);

  const filteredItems = filter === 'All' ? items : items.filter(item => item.description === filter);

  return (
    <div className="item-list-container">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemListContainer;
