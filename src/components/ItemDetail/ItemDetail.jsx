import styles from './ItemDetail.module.css';
export const ItemDetail = ({
    id,
    name,
    description,
    released,
    background_image,
    raiting,
    platforms,
    developers,
    genres,
    publishers,
}) => {
    return (
        <div className={styles.detailContainer}>
            <div
                className={styles.backgroundBanner}
                style={{
                    backgroundImage: `url(${background_image})`,
                }}
            ></div>
            <div className={styles.mainContent}>
                <div className={styles.leftColumn}>
                    <div className={styles.breadcrumb}>
                        {name.toUpperCase()} | #{id}
                    </div>
                    <div className={styles.headerInfo}>
                        <span className={styles.releaseDate}>
                            {released || 'TBA'}
                        </span>
                        <div className={styles.platformIcons}>
                            {platforms.split(', ').map((platform, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={styles.platformBadge}
                                    >
                                        {platform}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <h1 className={styles.title}>{name}</h1>
                    <div className={styles.descriptionSection}>
                        <h2>About</h2>
                        <div className={styles.descriptionText}>
                            {description}
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <img
                        src={background_image}
                        alt={name}
                        className={styles.mainImage}
                    />
                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Raiting</span>
                            <span className={styles.metascore}>
                                {raiting || 'TBA'}
                            </span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Genres</span>
                            <p>{genres}</p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Developer</span>
                            <p>{developers}</p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statLabel}>Publisher</span>
                            <p>{publishers}</p>
                        </div>
                    </div>
                    <div className={styles.actionSection}>
                        <button className={styles.buyButton}>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
