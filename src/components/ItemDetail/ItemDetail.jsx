import styles from './ItemDetail.module.css';
export const ItemDetail = ({ item }) => {
    console.log('item.released', item.released);
    return (
        <div className={styles.detailContainer}>
            <div
                className={styles.backgroundBanner}
                style={{ backgroundImage: `url(${item.background_image})` }}
            ></div>
            <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                    <div className={styles.breadcrumb}>
                        {item.name.toUpperCase()}
                    </div>
                    <div className={styles.headerInfo}>
                        <span className={styles.releaseDate}>
                            {item.released || 'TBA'}
                        </span>
                        <div className={styles.platformIcons}>
                            {item.parent_platforms?.map((platform) => (
                                <span
                                    key={platform.platform.id}
                                    className={styles.platformBadge}
                                >
                                    {platform.platform.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h1 className={styles.title}>{item.name}</h1>
                    <div className={styles.descriptionSection}>
                        <h2>About</h2>
                        <div className={styles.descriptionText}>
                            {item.description_raw}
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <img
                        src={item.background_image}
                        alt={item.name}
                        className={styles.mainImage}
                    />
                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Metascore</span>
                            <span className={styles.metascore}>
                                {item.metacritic || 'TBA'}
                            </span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Genres</span>
                            <p>
                                {item.genres
                                    ?.map((genres) => genres.name)
                                    .join(', ')}
                            </p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Developer</span>
                            <p>
                                {item.developers
                                    ?.map((developer) => developer.name)
                                    .join(', ')}
                            </p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Publisher</span>
                            <p>
                                {item.publishers
                                    ?.map((publisher) => publisher.name)
                                    .join(', ')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.actionSection}>
                        <button className={styles.buyButton}>
                            Agregar al Carrito
                        </button>
                    </div>
                    <div className={styles.ratingsSection}>
                        <h3>Community Rating</h3>
                        <div className={styles.ratingBar}>
                            {item.ratings?.map((rating) => (
                                <div
                                    key={rating.id}
                                    className={`${styles.barPart} ${styles[rating.title]}`}
                                    style={{ width: `${rating.percent}%` }}
                                    title={`${rating.title}: ${rating.count} votos`}
                                ></div>
                            ))}
                        </div>
                        <ul className={styles.ratingList}>
                            {item.ratings?.map((r) => (
                                <li key={r.id}>
                                    <span
                                        className={`${styles.dot} ${styles[r.title]}`}
                                    ></span>
                                    {r.title}: <strong>{r.count}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
