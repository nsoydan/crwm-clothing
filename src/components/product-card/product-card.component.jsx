import CustomButton from "../custom-button/custom-button.component";
import "./product-card.styles.scss";
import { useDispatch,useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  
  const dispatch=useDispatch();
  const cartItems=useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </CustomButton>
    </div>
  );
};

export default ProductCard;