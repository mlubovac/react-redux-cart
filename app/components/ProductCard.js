import React from 'react';

const ProductCard = ({ picture, name, description, price }) => (
    <div className="card">
        <img className="card-img-top" src={picture} alt={name} />
        <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
            {price} <a href="#" className="btn btn-primary">Buy</a>
        </div>
    </div>            
);

export default ProductCard;