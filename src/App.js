import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
  
    constructor(){
      	super();
      	this.state = {
          	products: [
              	{
                price: 98,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 1
              	},
              	{
                price: 24,
                title: 'Jeans',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 2
              	},
              	{
                price: 9800,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
	handleDeleteProduct = (product) =>{
		const {products} = this.state;
		const index = products.indexOf(product);
		delete products[index];
		this.setState({
			products: products
		})
	}
	getCartCount = () => {
		const {products} = this.state;
		let count = 0;

		products.forEach((product) => {
			count += product.qty
		})

		return count;
	}
	getCartTotal = () =>{
		const { products } = this.state;

		let cartTotal = 0;

		products.map((product) => {
			cartTotal = cartTotal + product.price * product.qty;
		})
		return cartTotal;
	}

	render(){
		const{products} = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()} />
				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct = {this.handleDeleteProduct}
				/>
				<div style={ {fontSize: 20, padding: 10}}>Total: {this.getCartTotal()} </div>
			</div>
		);
	}
}

export default App;
