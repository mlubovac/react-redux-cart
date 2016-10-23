import React, { Component } from 'react';

const CartItemQuantityInput = ({ guid, quantity, onChange }) => (
    <input 
        type="number"
        className="form-control"
        min="1"
        value={quantity}
        onChange={(e) => onChange(guid, e.target.value)}
    />
);

export default CartItemQuantityInput;