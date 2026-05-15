import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('/data/games.json')
      .then((response) => {
        if (!response.ok) throw new Error('Error al cargar los datos');
        return response.json();
      })
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
