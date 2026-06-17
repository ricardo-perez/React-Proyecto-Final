import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const itemInCart = cart.some((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      alert('El producto ya está en el carrito');
      return;
    }
    setCart([...cart, item]);
    alert('Producto agregado al carrito');
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(updatedCart);
    alert('Producto eliminado del carrito');
  };
  const clearCart = () => {
    setCart([]);
    alert('Carrito vaciado');
  };
  const getTotalItems = () => {
    return cart.length;
  };
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  const checkOut = () => {
    alert('Compra realizada');
    clearCart();
    navigate('/');
  };
  const values = {
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotal,
    clearCart,
    checkOut,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
