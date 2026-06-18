import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/productsService';
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getProductById(id)
      .then((data) => setItemDetail(data))
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;
  return (
    <section>
      <ItemDetail item={itemDetail} />
    </section>
  );
};
