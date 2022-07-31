import { createContext, useContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove)=> {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartItem)=> cartItem.id !== existingCartItem.id)
  }

  return cartItems.map((cartItem) => 
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const deleteCartItem = (cartItems, cartItemToDelete) => cartItems.filter((cartItem)=> cartItem.id !== cartItemToDelete.id)


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: ()=> {},
  clearItemFromCart: ()=> {},
  cartCount: 0,
  total: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutTotal, setCheckoutTotal] = useState(0)

  useEffect (()=> {
    const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect (()=> {
    const newTotal = cartItems.reduce((total, {quantity, price})=> total + (quantity * price ), 0)
    setCheckoutTotal(newTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemsToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemsToRemove));
  };
  const clearItemFromCart = (cartItemToDelete)=>{
    setCartItems(deleteCartItem(cartItems, cartItemToDelete))
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, checkoutTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


