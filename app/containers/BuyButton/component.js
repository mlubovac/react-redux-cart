import React from 'react';

const BuyButton = ({ guid, name, price, onClick }) => (
    <button className="btn btn-outline-primary" onClick={onClick.bind(null, guid, name, price)}>Buy</button>    
);

export default BuyButton;