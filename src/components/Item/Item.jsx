import styles from './Item.module.css';
export const Item = ({
    name,
    released,
    background_image,
    rating,
    platforms,
    genres,
}) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={background_image}
                    alt={name}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.infoRow}>
                    <span>{released}</span>
                </div>
                <h2 className={styles.title}>{name}</h2>
                <div className={styles.infoRow}>
                    <strong>Platforms:</strong>
                    {platforms}
                </div>
                <div className={styles.infoRow}>
                    <strong>Genres:</strong>
                    {genres}
                </div>
                <div className={styles.stats}>
                    <span className={styles.badge}>Rating: {rating.toFixed(2)}</span>
                </div>
            </div>
        </article>
    );
};
