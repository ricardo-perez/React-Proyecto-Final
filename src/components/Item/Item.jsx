import { PlatformIconList } from '../PlatformIconList/PlatformIconList';
import styles from './Item.module.css';
export const Item = ({ product }) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={product.background_image}
                    alt={product.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.infoRow}>
                    <span>ID: {product.id}</span> |{' '}
                    <span>{product.released}</span>
                </div>
                <div className={styles.infoRow}>
                    <PlatformIconList platforms={product.platforms} />
                </div>
                <h2 className={styles.title}>{product.name}</h2>
                <div className={styles.infoRow}>
                    <strong>Genres:</strong>{' '}
                    {product.genres.map((genre) => genre.name).join(', ')}
                </div>
                <div className={styles.stats}>
                    <span className={styles.badge}>
                        Players: {product.total_interactions.toLocaleString()}
                    </span>
                    <span className={styles.badge}>
                        #{product.top_chart} Top {product.year}
                    </span>
                </div>
            </div>
        </article>
    );
};
