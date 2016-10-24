import React, { Component } from 'react';
import CartTableRow from './CartTableRow';
import OrderTotal from './../../components/OrderTotal';

class CartPage extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th style={{textAlign: "right", width: "8rem"}}>Price</th>                            
                            <th style={{width: "10rem"}}>Quantity</th>
                            <th style={{textAlign: "right", width: "8rem"}}>Total</th>
                            <th style={{width: "4rem"}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => <CartTableRow key={item.guid} {...item} />)}                    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>                            
                            <td></td>
                            <td style={{textAlign: "right"}}>
                                <OrderTotal total={this.props.cartTotal} />
                            </td>
                            <td></td>
                        </tr>
                    </tfoot>                    
                </table>
            </div>
        );
    }
};

export default CartPage;