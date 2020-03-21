import React, {Component} from 'react';
import {Productconsumer} from "./Context";
import {Link} from "react-router-dom";

class Modal extends Component {
    render() {
        return (
            <>
             <Productconsumer>
                 {value=>{
                     const {openModel,closeModel}=value
                     const {url,id,title,price}=value.modalProduct
                     console.log(value.modalProduct)
                    if(openModel){
                        return null;
                    }else {
                        return (
                           <>
                              <div className="container">
                                  <div className="row">
                                      <div className="col-lg-3 my-2">
                                          <div className="modal-body">
                                              <li className="list-item">{id}</li>
                                              <li className="list-item">{url}</li>
                                              <li className="list-item">{title}</li>
                                              <li className="list-item">{price}</li>
                                           </div>
                                      </div>
                                  </div>
                              </div>
                               <button className="btn btn-success ">
                                   <Link to="/productlist" className="text-white" >Store</Link>
                               </button>
                               <button className="btn btn-warning">
                                   <Link to="/cart" className="text-white" >Go to Cart</Link>
                               </button>
                           </>
                        )
                    }
                 }}
             </Productconsumer>
            </>
        );
    }
}

export default Modal;