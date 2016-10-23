import { connect } from 'react-redux';
import CartPage from './component';

const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);