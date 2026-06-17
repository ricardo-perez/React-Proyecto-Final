import { CartItem } from './CartItem';
import { useCart } from '../../context/CartContext';
import styles from './CartList.module.css';
export const CartList = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <ul className={styles.listContainer}>
      {cart.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <CartItem item={item} removeFromCart={removeFromCart} />
        </li>
      ))}
    </ul>
  );
};
