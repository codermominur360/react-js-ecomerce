import React from 'react';

const ColumnCart = () => {
    return (
        <div className="container d-lg-block">
            <div className="row">
                <div className="col-lg-2">
                    <div className="text-uppercase">Product</div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Name of Product</div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Price</div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Quantity</div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Remove</div>
                </div>
                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Total</div>
                </div>
            </div>
        </div>
    );
};

export default ColumnCart;