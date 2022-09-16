import './checkout-item.styles.scss';
import { useDispatch,useSelector } from 'react-redux';
import { removeItemFromCart,addItemToCart,clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
const CheckoutItem=({cartItem})=>{

    const dispatch=useDispatch();
    const cartItems= useSelector(selectCartItems);
    const removeItemHandler=()=>dispatch(removeItemFromCart(cartItems,cartItem));
    const addItemHandler=()=>dispatch(addItemToCart(cartItems,cartItem));
    const clearItemHandler=()=>dispatch(clearItemFromCart(cartItems,cartItem));
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