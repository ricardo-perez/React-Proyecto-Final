import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './ProductSuccess.module.css';
export const ProductSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <section className={styles.successContainer}>
      <h2 className={styles.title}>Producto cargado con éxito</h2>
      <p className={styles.text}>
        ID del producto:
        <Link to={`/product/${id}`} className={styles.idHighlight}>
          {id}
        </Link>
      </p>
      <p className={styles.text}>
        Puede cargar otro producto haciendo click en el botón.
      </p>
      <button
        className={styles.button}
        onClick={() => navigate('/admin/products/new', { replace: true })}
      >
        Agregar otro producto
      </button>
    </section>
  );
};
