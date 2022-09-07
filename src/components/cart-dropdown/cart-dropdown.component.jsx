import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate} from'react-router-dom';


const CartDropdown = () => {
    const { cartItems,setIsCartOpen } = useContext(CartContext);

    const navigate=useNavigate(); 

    const onClickHandler=()=>{
      navigate('/checkout');
      setIsCartOpen(false)
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
