import { connect } from 'react-redux';
import { removeCartItem } from './actions';
import RemoveCartItemButton from './component';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (guid) => dispatch(removeCartItem(guid))
    };
};

export default connect(null, mapDispatchToProps)(RemoveCartItemButton);