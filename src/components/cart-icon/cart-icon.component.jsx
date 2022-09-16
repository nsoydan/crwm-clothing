import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch,useSelector } from 'react-redux';
import { selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartIcon=()=> {

    const dispatch=useDispatch();    
    const isCartOpen=useSelector(selectIsCartOpen);
    const cartCount=useSelector(selectCartCount);
    
    const toggleCartIsOpen =()=> dispatch(setIsCartOpen(!isCartOpen));

    return(
        <div className='cart-icon-container' onClick={toggleCartIsOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )

}

export default CartIcon;
