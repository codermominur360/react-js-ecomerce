import React, {Component} from 'react';
import Title from "../Title";
import ColumnCart from "./ColumnCart";
import EmptyCart from "./EmptyCart";
import {Productconsumer} from "../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class Cart extends Component {
    render() {
        return (
            <>
                <Productconsumer>
                    {(value)=>{
                        const {cart}=value;
                        if(cart.length >0 ){
                            return(
                                <>
                                    <Title name=" Cart Total Calculation sds"/>
                                    <ColumnCart/>
                                    <CartList value={value}/>
                                    <CartTotal value={value} />
                                </>
                            )
                        }else{
                            return  <EmptyCart/>
                        }
                    }}
                </Productconsumer>
            </>
        );
    }
}

export default Cart;