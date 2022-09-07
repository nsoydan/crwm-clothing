import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem=({cartItem})=>{

    const {addItemToCart,removeItemfromCart,clearItemFromCart}=useContext(CartContext);
    const removeItemHandler=()=>removeItemfromCart(cartItem)
    const addItemHandler=()=>addItemToCart(cartItem)
    const clearItemHandler=()=>clearItemFromCart(cartItem)

    const {name,price,quantity,imageUrl,id} = cartItem;
    return(
        <div className="checkout-item-container" key={id}>
                <div className='image-caontainer'><img src={imageUrl} alt={`${name}`}/></div>
                   
                    <span className='name'>{name}</span>
                    <span className='quantity'>
                    <div className='arrow' onClick={removeItemHandler} >&#10094; </div>
                    <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={addItemHandler}> &#10095;</div>
                </span>

                    <span className='price'>{price}</span>
                    <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>  
               
        </div>
    );
};

export default CheckoutItem