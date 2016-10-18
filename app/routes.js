import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MasterLayout from './components/MasterLayout';

import AboutPage from './containers/AboutPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';
import ProductsPage from './containers/ProductsPage';

export default (
    <Route path='/' component={MasterLayout}>
        <IndexRoute component={ProductsPage} />
        <Route path='cart' component={CartPage} />
        <Route path='checkout' component={CheckoutPage} />                    
        <Route path='about' component={AboutPage} />       
    </Route>
);