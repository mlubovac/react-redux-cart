import { connect } from 'react-redux';
import CartPage from './component';


const getCartTotal =  (cart) => {
    return cart.reduce((prev, curr) => {
        return prev += (curr.price * curr.quantity)
    }, 0).toFixed(2);
};


const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        cartTotal: getCartTotal(state.cart)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);