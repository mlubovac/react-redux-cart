import { connect } from 'react-redux';
import { addToCart } from './actions';
import BuyButton from './component';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (guid, name, price) => console.log(dispatch(addToCart(guid, name, price)))
    }
};

export default connect(null, mapDispatchToProps)(BuyButton);