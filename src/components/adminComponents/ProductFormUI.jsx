import styles from './ProductFormUI.module.css';
export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Nuevo Juego</h2>
      {errors.general && (
        <div className={styles.errorBanner}>
          <p>{errors.general}</p>
        </div>
      )}
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">
            <span className={styles.labelText}>Nombre:</span>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={onChange}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="price">
            <span className={styles.labelText}>Precio:</span>
            <input
              className={styles.input}
              type="number"
              id="price"
              name="price"
              min="0.99"
              max="100"
              step="0.01"
              value={product.price}
              onChange={onChange}
            />
            {errors.price && <p className={styles.errorText}>{errors.price}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="description">
            <span className={styles.labelText}>Descripción:</span>
            <textarea
              className={styles.textarea}
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
            />
            {errors.description && (
              <p className={styles.errorText}>{errors.description}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="released">
            <span className={styles.labelText}>Año de lanzamiento:</span>
            <input
              className={styles.input}
              type="number"
              id="released"
              name="released"
              min="1970"
              max="2026"
              value={product.released}
              onChange={onChange}
            />
            {errors.released && (
              <p className={styles.errorText}>{errors.released}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="background_image">
            <span className={styles.labelText}>Imagen de fondo:</span>
            <input
              className={styles.input}
              type="file"
              id="background_image"
              name="background_image"
              accept="image/*"
              onChange={onFileChange}
            />
            {errors.file && <p className={styles.errorText}>{errors.file}</p>}
            {errors.background_image && (
              <p className={styles.errorText}>{errors.background_image}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="rating">
            <span className={styles.labelText}>Rating:</span>
            <input
              className={styles.input}
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              step="0.01"
              value={product.rating}
              onChange={onChange}
            />
            {errors.rating && (
              <p className={styles.errorText}>{errors.rating}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="platforms">
            <span className={styles.labelText}>Plataformas:</span>
            <span className={styles.helperText}>
              Ingrese las opciones separadas por coma
            </span>
            <input
              className={styles.input}
              type="text"
              id="platforms"
              name="platforms"
              placeholder="PC, PlayStation 5, Xbox Series S/X"
              value={product.platforms}
              onChange={onChange}
            />
            {errors.platforms && (
              <p className={styles.errorText}>{errors.platforms}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="developers">
            <span className={styles.labelText}>Desarrolladores:</span>
            <span className={styles.helperText}>
              Ingrese las opciones separadas por coma
            </span>
            <input
              className={styles.input}
              type="text"
              id="developers"
              name="developers"
              placeholder="Sundial Interactive, Sandfall Interactive"
              value={product.developers}
              onChange={onChange}
            />
            {errors.developers && (
              <p className={styles.errorText}>{errors.developers}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="genres">
            <span className={styles.labelText}>Géneros:</span>
            <span className={styles.helperText}>
              Ingrese las opciones separadas por coma
            </span>
            <input
              className={styles.input}
              type="text"
              id="genres"
              name="genres"
              placeholder="Action, Shooter, Adventure, RPG"
              value={product.genres}
              onChange={onChange}
            />
            {errors.genres && (
              <p className={styles.errorText}>{errors.genres}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="publishers">
            <span className={styles.labelText}>Distribuidoras:</span>
            <span className={styles.helperText}>
              Ingrese las opciones separadas por coma
            </span>
            <input
              className={styles.input}
              type="text"
              id="publishers"
              name="publishers"
              placeholder="Warner Bros. Games, Electronic Arts"
              value={product.publishers}
              onChange={onChange}
            />
            {errors.publishers && (
              <p className={styles.errorText}>{errors.publishers}</p>
            )}
          </label>
        </div>
        <button className={styles.submitButton} disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
      </form>
    </div>
  );
};
