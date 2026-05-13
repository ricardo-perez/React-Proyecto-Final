import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export const Nav = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <li>
                    <Link to={'/carrito'} className={styles.navLink}>
                        Carrito
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
