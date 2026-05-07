import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailContainer = () => {
    // const { id } = useParams();
    // const baseUrl = 'https://api.rawg.io/api';
    // const params = {
    //     key: 'b1370f143062471bab0a10f4f72d060a',
    // };
    // const queryString = new URLSearchParams(params).toString();
    // const urlAPI = `${baseUrl}/games/${id}?${queryString}`;
    const url = '/data/details-of-the-game.json';
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setItemDetail(data))
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Cargando...</p>;
    if (!itemDetail) return <p>Producto no encontrado</p>;
    if (error) return <p>Error al cargar los datos</p>;
    return (
        <section>
            <h1>Detalles del producto</h1>
            <ItemDetail item={itemDetail} />
        </section>
    );
};
