import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate} from'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";


const CartDropdown = () => {
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems);
    const navigate=useNavigate(); 

    const onClickHandler=()=>{
      navigate('/checkout');
      dispatch(setIsCartOpen(false));
    }
  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <CustomButton onClick={onClickHandler}>Checkout</CustomButton>
      </div>
    );
  };
  
  export default CartDropdown;
