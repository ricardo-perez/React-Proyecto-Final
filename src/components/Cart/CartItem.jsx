import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';
export const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price } = item;
  return (
    <article className={styles.itemCard}>
      <div className={styles.infoContainer}>
        <Link to={`/product/${id}`} className={styles.productLink}>
          <h3 className={styles.productName}>{name}</h3>
        </Link>
      </div>
      <div className={styles.actionsContainer}>
        <span className={styles.productPrice}>$ {price.toFixed(2)}</span>
        <button
          onClick={() => removeFromCart(id)}
          className={styles.deleteButton}
          title="Eliminar producto"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
};
