import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log("existing cart item::",existingCartItem);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem=(cartItems,productToRemove) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

    if(existingCartItem.quantity === 1){
      return cartItems.filter((cartItem)=>cartItem.id !== existingCartItem.id)
    }

    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

};
export const clearItem=(cartItems,itemToClear) =>{
  
   return cartItems.filter((cartItem)=>cartItem.id !== itemToClear.id)

    
};


export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount:0,
  removeItemfromCart:()=>{},
  clearItemFromCart:()=>{},
  carTotal:0,
  
});

export const CartProvider = ({ children }) => {

   
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount]=useState(0);
  const [cartTotal,setCartTotal]=useState(0);

  useEffect (()=>{
    const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
    setCartCount(newCartCount);
  },[cartItems]);
  
  useEffect(()=>{
    const newCartTotal=cartItems.reduce((total,cartItem)=>total+(cartItem.quantity*cartItem.price),0);
    setCartTotal(newCartTotal);
  },[cartItems]);
    
  console.log(cartItems) ;
  const addItemToCart = (product) => setCartItems(addCartItem(cartItems, product));
   
  const removeItemfromCart = (product) => setCartItems(removeCartItem(cartItems, product));

  const clearItemFromCart=(product)=>setCartItems(clearItem(cartItems,product));

  const value = { isCartOpen, 
                  setIsCartOpen, 
                  cartItems, 
                  addItemToCart,
                  cartCount,
                  removeItemfromCart,
                  clearItemFromCart,
                  cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};