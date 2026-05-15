import styles from './FormUI.module.css';

export const FormUI = ({ onChange, onSubmit, formData, errors }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Contacto</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">
            <span className={styles.labelText}>Nombre:</span>
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={onChange}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="lastname">
            <span className={styles.labelText}>Apellido:</span>
            <input
              className={styles.input}
              id="lastname"
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={onChange}
            />
            {errors.lastname && (
              <p className={styles.errorText}>{errors.lastname}</p>
            )}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            <span className={styles.labelText}>Email:</span>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="message">
            <span className={styles.labelText}>Mensaje:</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={onChange}
            />
            {errors.message && (
              <p className={styles.errorText}>{errors.message}</p>
            )}
          </label>
        </div>
        <button className={styles.submitButton}>ENVIAR</button>
      </form>
    </div>
  );
};
