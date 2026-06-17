import { createContext, useContext } from 'react';

// Context
export const CartContext = createContext();
// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
