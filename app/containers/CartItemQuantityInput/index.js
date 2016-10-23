import { connect } from 'react-redux';
import { setItemQuantity } from './actions';
import CartItemQuantityInput from './component';

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (guid, quantity) => dispatch(setItemQuantity(guid, quantity))
    };
};

export default connect(null, mapDispatchToProps)(CartItemQuantityInput);