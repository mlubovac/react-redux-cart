import React, { Component } from 'react';
import { Link } from 'react-router';

class MasterLayout extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <Link className="navbar-brand" to="/">React Redux Shopping Cart example</Link>                    
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="cart" className="nav-link" activeClassName={"active"}>Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="checkout" className="nav-link" activeClassName={"active"}>Check Out</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="about" className="nav-link" activeClassName={"active"}>About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default MasterLayout;