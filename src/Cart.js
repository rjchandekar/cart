import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 98,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 24,
                    title: 'Jeans',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9800,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                },
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    handleIncreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty-1<0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDeleteProduct = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        delete products[index];
        this.setState({
            products: products
        })
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return (
                    <CartItem 
                        product={product}
                        key = {product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                    />
                )
                })}
            </div>
        );
    }
}


export default Cart;