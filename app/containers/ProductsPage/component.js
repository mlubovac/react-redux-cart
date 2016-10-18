import React, { Component } from 'react';
import ProductCard from './../../components/ProductCard';

class ProductsPage extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                <h1>Products Page</h1>
                { this.props.products.map(product => <ProductCard key={product.guid} {...product} />) }
            </div>
        );
    }
};

export default ProductsPage;