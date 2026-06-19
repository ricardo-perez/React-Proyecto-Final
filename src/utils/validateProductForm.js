export const validateProductForm = (product) => {
  const errors = {};
  if (!product.name || product.name.trim() === '') {
    errors.name = 'Debe ingresar el nombre del juego.';
  }
  if (!product.price) {
    errors.price = 'Debe ingresar un precio.';
  } else if (
    isNaN(product.price) ||
    product.price < 0.99 ||
    product.price > 100
  ) {
    errors.price = 'El precio debe ser un número entre 0.99 y 100.00.';
  }
  if (!product.description || product.description.trim() === '') {
    errors.description = 'Debe ingresar una descripción';
  }
  if (!product.released) {
    errors.released = 'Debe ingresar el año de lanzamiento.';
  } else if (
    isNaN(product.released) ||
    product.released <= 1970 ||
    product.released > 2026
  ) {
    errors.released = 'El año debe ser un número entre 1970 y 2026.';
  }
  if (!product.file) {
    errors.file = 'Debe seleccionar una imagen.';
  }
  if (!product.rating) {
    errors.rating = 'Debe ingresar el rating.';
  } else if (
    isNaN(product.rating) ||
    product.rating < 1 ||
    product.rating > 5
  ) {
    errors.rating = 'El rating debe ser un número entre 1 y 5.';
  }
  if (!product.platforms || product.platforms.trim() === '')
    errors.platforms = 'Debe indicar las plataformas.';
  if (!product.developers || product.developers.trim() === '')
    errors.developers = 'Debe indicar el desarrollador.';
  if (!product.genres || product.genres.trim() === '')
    errors.genres = 'Debe indicar al menos un género.';
  if (!product.publishers || product.publishers.trim() === '')
    errors.publishers = 'Debe indicar la editora.';

  return errors;
};
