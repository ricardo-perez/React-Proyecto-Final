import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { getProducts } from '../../services/productsService';
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;
  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
