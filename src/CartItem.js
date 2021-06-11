import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = ()=>{
        //Naive approach
        // this.state.qty = this.state.qty+1;

        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }
    decreaseQuantity = ()=>{
        // this.setState({
        //     qty: this.state.qty - 1
        // });
        this.setState((prevState) => {
            if(prevState.qty-1>=0){
                return {
                    qty: prevState.qty - 1
                }
            }else{
                return;
            }
            
        })
    }
    
    render(){
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}} >Rs {price}</div>
                    <div style={{fontSize: 25}} >Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png"
                            onClick= {this.increaseQuantity} 
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/02/44/39/19/500_F_244391909_DfS5TL9Oyzhf4VW0v9gPq4FPDg3BtD9w.jpg"
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

//styling using objects
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;