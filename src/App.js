import React, {Component} from 'react';
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import ProductList from "./component/ProductList";
import Default from "./component/Default";
import Details from "./component/Details";
import Cart from "./component/cart/Cart";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ProductProvider} from './component/Context';
import Modal from "./component/Modal";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                    <Router>
                        <Switch>
                            <Route  exact path="/product" component={Product}/>
                            <Route  path="/productlist" component={ProductList}/>
                            <Route  path="/ditails" component={Details}/>
                            <Route  path="/cart" component={Cart}/>
                            <Route component={Default}/>
                        </Switch>
                        <Modal/>
                    </Router>
                {/*<Product/>*/}
                {/*<ProductList/>*/}
                {/*<Default/>*/}
                {/*<Details/>*/}
            </>
        );
    }
}

export default App;