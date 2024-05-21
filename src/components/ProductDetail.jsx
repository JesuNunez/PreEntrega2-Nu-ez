import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import '../styles/ProductDetail.css';

const ProductDetail = ({ addToCart, handleDescriptionClick }) => {
const { productId } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
  const fetchProduct = () => {
    const item = data.find((product) => product.id === productId);
    setProduct(item);
};

  fetchProduct();
}, [productId]);

return (
  <div className="product-detail-container">
    {product ? (
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} />
        <p>{product.description}</p>
        <p className="price">Precio: ${product.price}</p>
        {product.priceDiscount && (
          <p className="discount">Descuento: ${product.priceDiscount}</p>
        )}
        <p className="rating">
          Rating: {product.rating.value} ({product.rating.count} reviews)
        </p>
        <p className="stock">Stock: {product.stock}</p>
        <button onClick={() => addToCart(product)} disabled={product.stock <= 0}>
          {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
        </button>
      </div>
    ) : (
      <p>Cargando producto...</p>
    )}
  </div>
);
};

export default ProductDetail;
