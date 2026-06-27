import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import styles from './Dashboard.module.css';
export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Panel de Administración</h1>
        <nav className={styles.navActions}>
          <Link to="/" className={styles.btnLink}>
            Volver a la tienda
          </Link>
          <button onClick={logout} className={styles.btnLogout}>
            Cerrar sesión
          </button>
        </nav>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>Acciones rápidas</h2>
        <div className={styles.gridActions}>
          <Link to="/admin/products/new" className={styles.actionCard}>
            Cargar producto
          </Link>
          <span className={`${styles.actionCard} ${styles.disabledCard}`}>
            Modificar producto
          </span>
          <span className={`${styles.actionCard} ${styles.disabledCard}`}>
            Eliminar producto
          </span>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Ayuda</h2>
        <div className={styles.helpSection}>
          <p className={styles.helpText}>
            Desde este panel podés gestionar el catálogo completo de
            videojuegos. Utilizá las opciones superiores para navegar de regreso
            a la tienda pública o finalizar la sesión de forma segura.
          </p>
        </div>
      </section>
    </div>
  );
};
