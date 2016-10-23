import React from 'react';
import BuyButton from './../containers/BuyButton';

const card = {
  float: "left",
  width: "33.333%",
  padding: ".75rem",
  marginBottom: "2rem",
  border: 0
};

const image = {
    height: "280px", 
    width: "100%",
    display: "block"    
};

const ProductCard = ({ guid, picture, name, description, price }) => (
    <div className="card" style={card}>
        <img className="card-img-top" style={image} src={picture} alt={name} />
        <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description.slice(0, 50)}</p>
            <BuyButton guid={guid} name={name} price={price} />
        </div>
    </div>            
);

export default ProductCard;