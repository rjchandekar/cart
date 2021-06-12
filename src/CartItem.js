import React from 'react';

const  CartItem = (props) =>{
 
    const {price, title, qty} = props.product;
    const {
        product, 
        onDecreaseQuantity,
        onIncreaseQuantity, 
        onDeleteProduct
    } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
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
                        onClick= {() => onIncreaseQuantity(product)} 
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/02/44/39/19/500_F_244391909_DfS5TL9Oyzhf4VW0v9gPq4FPDg3BtD9w.jpg"
                        onClick = {() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        onClick = {() => onDeleteProduct(product)}
                    />
                </div>
            </div>
        </div>
    )
    
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