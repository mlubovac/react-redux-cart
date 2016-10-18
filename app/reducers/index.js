import { combineReducers } from 'redux';
import products from './../containers/ProductsPage/reducer';
import cart from './../containers/CartPage/reducer';

const appStore = combineReducers({
    products,
    cart
});

export default appStore;