import CustomButton from "../custom-button/custom-button.component";
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {id,name,price,imageUrl}=product;
  
    return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
       
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        
      </div><CustomButton buttonType="inverted" >Add to Cart</CustomButton>
    </div>
  );
};


export default ProductCard;