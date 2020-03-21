import React, {Component} from 'react';
import {Data} from '../component/Data'
import Title from "./Title";
import {Productconsumer} from "./Context";
import Product from "./Product";


class ProductList extends Component {
    constructor() {
        super();
        this.state={
            product:"Product Name",
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h1>{this.state.product}</h1>
                        <Title name="Our " tilte="Product"/>
                        <Productconsumer>
                            {value=> {
                                return value.product.map((item)=>{
                                   return <Product key={item.id} Item={item}/>
                                })
                            }}
                        </Productconsumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;