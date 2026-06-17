import { CartItem } from './CartItem';
import { useCart } from '../../context/CartContext';
export const CartList = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </>
  );
};
