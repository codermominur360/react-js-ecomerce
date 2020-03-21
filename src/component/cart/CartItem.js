import React from 'react';

const CartItem = ({item,value}) => {
    const {id,title,url,price,count,total}=item
    const {increment,decrement,removeItem}=value
    return (
        <div className="container card">
            <div className="row">

                <div className="col-lg-2">
                    <div className="text-uppercase">{url}</div>
                </div>

                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Product Name</div>{title}
                </div>

                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">Price :</div>{price}
                </div>

                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase">
                        <span className="btn btn-black" style={Btncolor}
                              onClick={()=>{
                                  increment(id)
                              }}
                        > + </span>
                        <span className="btn btn-black mx-1"> {count} </span>
                        <span className="btn btn-black mx-1"  style={Btncolor}
                              onClick={()=>{
                                  decrement(id)
                              }}
                        > - </span>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase"
                         onClick={()=>console.log(removeItem(id))}
                    >
                        <i className="fa fa-trash " style={iconColor}></i>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-2">
                    <div className="text-uppercase bold ">{total==''? 'price rate here':""}  </div>
                </div>

            </div>
        </div>
    );
};

export default CartItem;
const  Btncolor={
    background:"#05186b",
    color:"#fff",
    fontSize:"18px",
    fontWeight: 700,
}
const iconColor={
    color:"#05186b",
    fontSize:"22px",
}