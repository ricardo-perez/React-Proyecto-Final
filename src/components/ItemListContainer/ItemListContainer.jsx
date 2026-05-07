import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
    const baseUrl = 'https://api.rawg.io/api';
    const params = {
        key: 'b1370f143062471bab0a10f4f72d060a',
        pageSize: 10,
        date: '2025-01-01,2025-12-31',
        platforms: '4',
        genres: '4',
        ordering: '-rating',
    };
    const queryString = new URLSearchParams(params).toString();
    const urlAPI = `${baseUrl}/games?${queryString}`;
    const url = '/data/games.json';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const results = data.results.map((item, index) => {
                    const {
                        beaten = 0,
                        dropped = 0,
                        owned = 0,
                        playing = 0,
                        yet = 0,
                    } = item.added_by_status || {};
                    return {
                        top_chart: index + 1,
                        id: item.id,
                        name: item.name,
                        background_image: item.background_image,
                        genres: item.genres,
                        released: item.released,
                        platforms: item.platforms,
                        added_by_status: item.added_by_status,
                        total_interactions:
                            beaten + dropped + owned + playing + yet,
                        year: 2026,
                    };
                });
                setProducts(results);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos</p>;
    return (
        <>
            <section>
                <ItemList products={products} />
            </section>
        </>
    );
};
