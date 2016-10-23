import React, { Component } from 'react';
import CartItemQuantityInput from './../CartItemQuantityInput';
import RemoveCartItemButton from './../RemoveCartItemButton';

class CartTableRow extends Component {
    render() {
        const { name, guid, quantity, price } = this.props.cartItem;
        const lineTotal = (quantity * price).toFixed(2);
        return (
            <tr>
                <td>{name}</td>
                <td style={{width: "10rem"}}>
                    <CartItemQuantityInput guid={guid} quantity={quantity} />
                </td>
                <td>{price}</td>
                <td>{lineTotal}</td>
                <td>
                    <RemoveCartItemButton guid={guid} />
                </td>
            </tr>
        );
    }
}

export default CartTableRow;