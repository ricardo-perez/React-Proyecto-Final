import styles from './Footer.module.css';
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.attribution}>
                    Data provided by{' '}
                    <a
                        href='https://rawg.io/'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.link}
                    >
                        RAWG.io
                    </a> and RAWG++
                </p>
            </div>
        </footer>
    );
};
