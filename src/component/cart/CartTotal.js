import React from 'react';
import {Link} from "react-router-dom";

const CartTotal = ({value}) => {
    const {cartSubTotal,cartTax,cartTotal}=value
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-block text-right" >
                        <Link>
                            <button className="btn btn-warning"
                                    onClick={value.clearCart}
                            >
                                Clear Button
                            </button>
                        </Link>
                        <div className="text-title">
                            Total : <span> {cartSubTotal}</span>
                        </div>
                        <div className="text-title">
                            Tex : <span> {cartTax}</span>
                        </div>
                        <div className="text-title">
                            Net Total : <span> {cartTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartTotal;