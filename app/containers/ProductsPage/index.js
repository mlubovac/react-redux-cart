import { connect } from 'react-redux';
import { getProducts } from './actions';
import ProductsPage from './component';

const mapStateToProps = (state = {}, ownProps) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);