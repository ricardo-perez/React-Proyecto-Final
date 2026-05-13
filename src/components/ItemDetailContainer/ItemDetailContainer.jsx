import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/data/details-of-the-game.json')
            .then((response) => response.json())
            .then((data) => {
                // const item = data.find((element) => String(element.id) === id);
                // if (item) setItemDetail(item);
                setItemDetail(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Cargando...</p>;
    if (!itemDetail) return <p>Producto no encontrado</p>;
    return (
        <section>
            <h1>Detalles del producto</h1>
            <ItemDetail item={itemDetail} />
        </section>
    );
};
