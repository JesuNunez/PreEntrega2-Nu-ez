import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('../data.json');
      const data = await response.json();
      const filteredProducts = data.filter(product => product.categoryId === categoryId);
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
