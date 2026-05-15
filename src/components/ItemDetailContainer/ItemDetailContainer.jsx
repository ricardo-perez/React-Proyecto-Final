import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('/data/games.json')
      .then((response) => {
        if (!response.ok) throw new Error('Error al cargar los datos');
        return response.json();
      })
      .then((data) => {
        const item = data.find((element) => String(element.id) === id);
        if (item) setItemDetail(item);
      })
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
      <ItemDetail {...itemDetail} />
    </section>
  );
};
