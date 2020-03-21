import React, {Component} from 'react';
import {Productconsumer} from "./Context";
import {detailsProduct} from "./Data";
import Title from "./Title";
import {Link} from "react-router-dom";
import ProductList from "./ProductList";

class Details extends Component {
    render() {
        return (
                <Productconsumer>
                    {value=>{

                       // const {id,name}=value.detailsProduct;
                       return (
                           <div className="container">
                               <div className="row">
                                   <div className="col-lg-5 d-flex">
                                       <div className="card">
                                           {(value.detailsProduct.map((dd)=>{
                                               const {id,name,incart,dics}=dd
                                               return(
                                                   <>
                                                       <div className="card-body">
                                                           <ul>
                                                               <li>{id}</li>
                                                               <li>{name}</li>
                                                               <li>{dics}</li>
                                                           </ul>
                                                       </div>
                                                       <div className="card-footer d-flex">
                                                           <button className="btn btn-info mr-2 "> <Link to="/productlist"> Back</Link></button>
                                                           <button  className="btn btn-success"
                                                                    disabled={incart? true : false}
                                                                    onClick={()=>{
                                                                        value.addToCart(id)
                                                                        value.openModal(id)
                                                                    }}
                                                           >
                                                               {incart? <p className="text-danger" disabled>In car</p> : <p className="text-white">add cart</p>}
                                                           </button>
                                                       </div>
                                                   </>
                                               )
                                           }))}
                                       </div>
                                   </div>
                               </div>
                           </div>
                       )
                    }}
                </Productconsumer>
        );
    }
}

export default Details;