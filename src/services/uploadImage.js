const IMGBB_API_KEY = '8275f804359b06f4b83656fb953d6fbb';
const ENDPOINT = 'https://api.imgbb.com/1/upload';
export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('image', image);
  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (!data.success) {
      throw new Error('Error al subir la imagen');
    }
    if (!data.data || !data.data.url) {
      throw new Error('El servidor de imágenes no devolvió una URL válida.');
    }
    return data.data.url;
  } catch (error) {
    throw new Error(`Error al subir la imagen: ${error.message}}`);
  }
};
