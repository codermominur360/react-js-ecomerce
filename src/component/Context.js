import React, {Component} from 'react';
import {Data,detailsProduct} from '../component/Data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.state={
            product:[],
            detailsProduct:detailsProduct,
            cart :[],
            modalOpen : true,
            modalProduct:detailsProduct,
            cartSubTotal: 0,
            cartTax : 0,
            cartTotal : 0
        }
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts =()=>{
        let tempProducts =[];
        Data.forEach((item)=>{
            const singleItem ={...item};
            tempProducts =[...tempProducts, singleItem];
        })

        this.setState({
            product:tempProducts,
        })
    }

    getItem =id=>{
        const product = this.state.product.find(item=> item.id ===id);
        return product;
    }

    handlerDetails =(id)=>{
        // const product = this.state.product.find(item=> item.id ===id);
        const product = this.getItem(id);
        this.setState({
            detailsProduct: product
        })
    }

    addToCart =id=> {
        let TempProducts = [...this.state.product];
        const index = TempProducts.indexOf(this.getItem(id));
        const product = TempProducts[index];
        product.incart = 1;
        product.count = 1;
        const price =product.price;
        product.total = price;
        this.setState({
            product:TempProducts,
            cart : [...this.state.cart,product]

        },
            ()=>{
                this.addTotals();
            }
        )
    }

    addTotals=()=>{
        let subTotal =0;
        this.state.cart.map(item=>subTotal +=item.total);
        const tempTax =subTotal* .3;
        const tax =parseFloat(tempTax.toFixed(2));
        const total =subTotal +tax;
        this.setState({
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total
        })
    }

    openModal = id =>{
        const product = this.getItem(id);
        this.setState({
            modalProduct:product,
            modalOpen : true
        })
    }
    closeModal =()=>{
        this.setState({
            modalOpen: false,
        })
    }

    // Cart show Method
    increment =id => {
        let tempCart = [...this.state.cart];
        const selectedProdut = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProdut);
        const product = tempCart[index];
        product.count =product.count +1;
        product.total = product.count * product.price
         this.setState({
             cart:[...tempCart]
         },
             ()=>{
             this.addTotals();
             }
         )

    }
    decrement =id =>{
        let temptCart =[...this.state.cart];
        const selectedProduct = temptCart.find(item=>item.id ===id);
        const index= temptCart.indexOf(selectedProduct);
        const product =temptCart[index];

        product.count =product.count - 1;
        product.count === 0 ? this.removeItem(id) : product.total = product.total * product.price;
        this.setState({
            cart:[...temptCart]
        },
            ()=>{
            this.addTotals();
            }
        )
    }

    removeItem =id =>{
        let tempProducts = [...this.state.product];
        let tempCart= [...this.state.cart];
        tempCart =tempCart.filter(item=>item.id !== id);

        const index =tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.incart =false;
        removedProduct.count =0;
        removedProduct.total =0;
        this.setState({
            cart: [...tempCart],
            product: [...tempProducts]
        },
            ()=>{
            this.addTotals();
            }
        )
    }

    clearCart =id=>{
        this.setState({
            cart: []
        },
            ()=>{
            this.setProducts();
            this.addTotals()
            }
        )
    }


    // Cart store value test perpase
    totested =()=>{
        console.log(" state product",this.state.product[0].incart)
        console.log("Data product",Data[0].incart);

        const tempProducts = [...this.state.product]
        tempProducts[0].incart=true
        this.setState({
            product:tempProducts
        },()=>{
            console.log(" state product",this.state.product[0].incart)
            console.log("Data product",Data[0].incart);
        })
    }


    render() {
        return (
            <>

                <ProductContext.Provider value={{
                    ...this.state,
                    handlerDetails:this.handlerDetails,
                    addToCart:this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}>
                    <button onClick={this.totested}> test me</button>
                    {this.props.children}
                </ProductContext.Provider>
            </>
        );
    }
}

const Productconsumer = ProductContext.Consumer;

export { ProductProvider, Productconsumer};