import styles from './ItemList.module.css';
import { Link } from 'react-router-dom';
import { Item } from '../Item/Item';
export const ItemList = ({ products }) => {
    if (!products.length) {
        return <p className={styles.emptyMessage}>No hay productos</p>;
    }
    return (
        <section className={styles.gridContainer}>
            {products.map(({ id, ...product }) => (
                <Link
                    to={`/product/${id}`}
                    key={id}
                    style={{ textDecoration: 'none' }}
                >
                    <Item {...product} />
                </Link>
            ))}
        </section>
    );
};
