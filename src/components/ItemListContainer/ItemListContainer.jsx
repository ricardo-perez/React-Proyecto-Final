import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch('/data/games.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error(error);
                setError(true);
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
