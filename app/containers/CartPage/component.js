import React, { Component } from 'react';
import CartTableRow from './CartTableRow';

class CartPage extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cartItems.map(cartItem => <CartTableRow key={cartItem.guid} cartItem={cartItem} />)
                        }                    
                    </tbody>
                </table>
            </div>
        );
    }
};

export default CartPage;