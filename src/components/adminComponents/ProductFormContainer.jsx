import { uploadImage } from '../../services/uploadImage';
import { validateProductForm } from '../../utils/validateProductForm';
import { ProductFormUI } from './ProductFormUI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/productsService';
export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const emptyProduct = {
    name: '',
    price: 0.99,
    description: '',
    released: new Date().getFullYear(),
    background_image: '',
    rating: 3,
    platforms: '',
    developers: '',
    genres: '',
    publishers: '',
  };
  const [product, setProduct] = useState(emptyProduct);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...product, [name]: value };
    setProduct(updatedData);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const errors = validateProductForm({ ...product, file });
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    try {
      setLoading(true);
      const imageUrl = await uploadImage(file);
      const productData = {
        ...product,
        price: parseFloat(product.price),
        rating: parseFloat(product.rating),
        released: parseInt(product.released, 10),
        background_image: imageUrl,
      };
      const id = await createProduct(productData);
      setProduct(emptyProduct);
      setFile(null);
      navigate(`/admin/products/success/${id}`, { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
