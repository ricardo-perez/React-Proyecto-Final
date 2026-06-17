import { useCart } from '../../context/CartContext';
import styles from './CartSummary.module.css';
export const CartSummary = () => {
  const { getTotalItems, getTotal, checkOut, clearCart } = useCart();
  return (
    <>
      <article className={styles.summaryCard}>
        <h2 className={styles.summaryTitle}>Resumen del pedido</h2>

        <div className={styles.infoRows}>
          <div className={styles.row}>
            <span className={styles.label}>Cantidad de productos:</span>
            <span className={styles.value}>{getTotalItems()}</span>
          </div>

          <div className={styles.rowTotal}>
            <span className={styles.labelTotal}>Total a pagar:</span>
            <span className={styles.valueTotal}>$ {getTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={() => checkOut()} className={styles.checkoutButton}>
            FINALIZAR COMPRA
          </button>

          <button onClick={() => clearCart()} className={styles.clearButton}>
            Vaciar carrito
          </button>
        </div>
      </article>
    </>
  );
};
