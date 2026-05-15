export const validateForm = (data) => {
  const errors = {};
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Debe ingresar el nombre del juego.';
  }
  if (!data.price) {
    errors.price = 'Debe ingresar un precio.';
  } else if (isNaN(data.price) || data.price < 0.99 || data.price > 100) {
    errors.price = 'El precio debe ser un número entre 0.99 y 100.00.';
  }
  if (!data.description || data.description.trim() === '') {
    errors.description = 'Debe ingresar una descripción';
  }
  if (!data.released) {
    errors.released = 'Debe ingresar el año de lanzamiento.';
  } else if (
    isNaN(data.released) ||
    data.released <= 1970 ||
    data.released > 2026
  ) {
    errors.released = 'El año debe ser un número entre 1970 y 2026.';
  }
  if (!data.background_image) {
    errors.background_image = 'Debe ingresar la URL de la imagen.';
  } else if (!data.background_image.startsWith('http')) {
    errors.background_image = 'Debe ingresar una URL válida.';
  }
  if (!data.rating) {
    errors.rating = 'Debe ingresar el rating.';
  } else if (isNaN(data.rating) || data.rating < 1 || data.rating > 5) {
    errors.rating = 'El rating debe ser un número entre 1 y 5.';
  }
  if (!data.platforms || data.platforms.trim() === '')
    errors.platforms = 'Debe indicar las plataformas.';
  if (!data.developers || data.developers.trim() === '')
    errors.developers = 'Debe indicar el desarrollador.';
  if (!data.genres || data.genres.trim() === '')
    errors.genres = 'Debe indicar al menos un género.';
  if (!data.publishers || data.publishers.trim() === '')
    errors.publishers = 'Debe indicar la editora.';

  return errors;
};
