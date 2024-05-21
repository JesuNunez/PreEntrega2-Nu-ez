import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMockData from '../async-mock.js';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchMockData();
      const filteredProducts = data.filter(product => product.description === categoryId);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]); 

  return (
    <div>
      <h2>Productos en la categoría: {categoryId}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;