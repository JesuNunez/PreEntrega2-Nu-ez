import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
  const { id, name, img, price, priceDiscount, description, stock, rating } = item;

  return (
    <div className="item-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>Descuento: ${priceDiscount}</p>
      <p>Rating: {rating.value} ({rating.count} reviews)</p>
      <p>Stock: {stock}</p>
      <Link to={`/product/${id}`}>
        <button>Descripción</button>
      </Link>
    </div>
  );
};

export default ItemCard;