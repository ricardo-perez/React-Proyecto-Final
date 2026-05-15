import { validateForm } from '../../utils/validateForm';
import { FormUI } from './FormUI';
import { useState } from 'react';

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    price: 0.99,
    description: '',
    released: 2026,
    background_image: '',
    rating: 3,
    platforms: '',
    developers: '',
    genres: '',
    publishers: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? parseFloat(value) : value;
    const updatedData = { ...formData, [name]: finalValue };
    setFormData(updatedData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      setErrors({});
      console.log('formData', formData);
      setFormData({
        id: 0,
        name: '',
        price: 0.99,
        description: '',
        released: 2026,
        background_image: '',
        rating: 3,
        platforms: '',
        developers: '',
        genres: '',
        publishers: '',
      });
    }
  };
  return (
    <FormUI
      onChange={handleChange}
      onSubmit={handleSubmit}
      formData={formData}
      errors={errors}
    />
  );
};
