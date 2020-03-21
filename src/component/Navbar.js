import React, {Component} from 'react';
import NavLink from "reactstrap/es/NavLink";
import "./style/nav/navbar.css"
import {Link} from "react-router-dom";
import {Productconsumer} from "./Context";


class Navbar extends Component {
    render() {
        return (
            <>
                <div className="top-navber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar menu-head-area">
                                    <span className="logo-area"> logo</span>
                                    <span className="Product-menu"> <a className="navbar-brand">Product</a></span>
                                    <div className="inline">
                                        <button className="cart-add-button" type="submit"><i className="fa fa-cart-plus"></i>Cart</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;