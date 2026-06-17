import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CartList } from './CartList';
import { CartSummary } from './CartSummary';
import styles from './CartView.module.css';
export const CartView = () => {
  const { cart } = useCart();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CARRITO DE COMPRAS</h1>

      {cart.length ? (
        <div className={styles.layout}>
          <main className={styles.mainContent}>
            <CartList />
          </main>
          <aside className={styles.sidebar}>
            <CartSummary />
          </aside>
        </div>
      ) : (
        <div className={styles.emptyContainer}>
          <p className={styles.emptyMessage}>No hay productos en el carrito</p>
          <Link to="/" className={styles.backButton}>
            Volver al inicio
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <Link to="/" className={styles.backLink}>
          Continuar comprando
        </Link>
      )}
    </div>
  );
};
