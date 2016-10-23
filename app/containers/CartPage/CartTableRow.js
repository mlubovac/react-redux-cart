import React, { Component } from 'react';
import CartItemQuantityInput from './../CartItemQuantityInput';
import RemoveCartItemButton from './../RemoveCartItemButton';

const CartTableRow = ({ name, guid, quantity, price }) => {
    const lineTotal = (quantity * price).toFixed(2);
    return (
        <tr>
            <td>{name}</td>
            <td style={{textAlign: "right"}}>{price}</td>                
            <td>
                <CartItemQuantityInput guid={guid} quantity={quantity} />
            </td>
            <td style={{textAlign: "right"}}>{lineTotal}</td>
            <td style={{textAlign: "center"}}>
                <RemoveCartItemButton guid={guid} />
            </td>
        </tr>
    );
};

export default CartTableRow;