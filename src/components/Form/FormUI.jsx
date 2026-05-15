import styles from './FormUI.module.css';

export const FormUI = ({ onChange, onSubmit, formData, errors }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Nuevo Juego</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Nombre:</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Precio:</span>
            <input
              className={styles.input}
              type="number"
              name="price"
              min="0.99"
              max="100"
              step="0.01"
              value={formData.price}
              onChange={onChange}
            />
            {errors.price && <p className={styles.errorText}>{errors.price}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Descripción:</span>
            <input
              className={styles.input}
              type="text"
              name="description"
              value={formData.description}
              onChange={onChange}
            />
            {errors.description && (
              <p className={styles.errorText}>{errors.description}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Año de lanzamiento:</span>
            <input
              className={styles.input}
              type="number"
              name="released"
              min="1970"
              max="2026"
              value={formData.released}
              onChange={onChange}
            />
            {errors.released && (
              <p className={styles.errorText}>{errors.released}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Imagen de fondo:</span>
            <input
              className={styles.input}
              type="text"
              name="background_image"
              value={formData.background_image}
              onChange={onChange}
            />
            {errors.background_image && (
              <p className={styles.errorText}>{errors.background_image}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Rating:</span>
            <input
              className={styles.input}
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={onChange}
            />
            {errors.rating && (
              <p className={styles.errorText}>{errors.rating}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Plataformas:</span>
            <input
              className={styles.input}
              type="text"
              name="platforms"
              value={formData.platforms}
              onChange={onChange}
            />
            {errors.platforms && (
              <p className={styles.errorText}>{errors.platforms}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Desarrolladores:</span>
            <input
              className={styles.input}
              type="text"
              name="developers"
              value={formData.developers}
              onChange={onChange}
            />
            {errors.developers && (
              <p className={styles.errorText}>{errors.developers}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Géneros:</span>
            <input
              className={styles.input}
              type="text"
              name="genres"
              value={formData.genres}
              onChange={onChange}
            />
            {errors.genres && (
              <p className={styles.errorText}>{errors.genres}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <span className={styles.labelText}>Distribuidoras:</span>
            <input
              className={styles.input}
              type="text"
              name="publishers"
              value={formData.publishers}
              onChange={onChange}
            />
            {errors.publishers && (
              <p className={styles.errorText}>{errors.publishers}</p>
            )}
          </label>
        </div>
        <button className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};
