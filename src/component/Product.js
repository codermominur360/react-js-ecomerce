import React, {Component} from 'react';
import Title from "./Title";
import {Productconsumer} from "./Context";
import {Link} from "react-router-dom";

class Product extends Component {

    ProductShow=()=>{
        console.log('dsdklfjls')
    }
    render() {

        const {id,thumbnailUrl,title,url,incart}= this.props.Item
        return (
           <>
               {/*<div className="card">*/}
               {/*    <div className="card-body" onClick={this.ProductShow.bind(this)}>*/}
               {/*       <Link to="/ditails">{url}</Link>*/}
               {/*    </div>*/}
               {/*    <div className="card-footer bg-dark text-white">*/}
               {/*         <button className="btn btn-info" disabled={ incart ? true:false}*/}
               {/*                onClick={()=>console.log('this is console log button ')}*/}
               {/*        >{incart? '<p className=" btn btn-danger" disabled >in Cart</p>': ( <i className="fa fa-cart-plus"></i> )}*/}
               {/*        </button>*/}

               {/*    </div>*/}
               {/*</div>*/}
               <Productconsumer>
                   {value=>(
                      <div className="card">
                          <div className="card-body"
                               onClick={() => value.handlerDetails(id)}
                          >
                              <Link to="/ditails">{url}</Link>
                          </div>
                          <div className="card-footer bg-dark text-white">
                              <button className="btn btn-info" disabled={incart ? true : false}
                                      onClick={()=>{
                                          value.addToCart(id);
                                          value.openModal(id);
                                      }}
                              >
                                  {incart ? 'in Cart' : (
                                  <i className="fa fa-cart-plus"></i>)}
                              </button>

                          </div>
                      </div>
                   )}
               </Productconsumer>
           </>
        );
    }
}

export default Product;