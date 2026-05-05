import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
    return (
        <>
            <header />
            <main>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route
                        path='/product/:id'
                        element={<ItemDetailContainer />}
                    />
                    <Route
                        path='/category/:categoryId'
                        element={<ItemListContainer />}
                    />
                </Routes>
            </main>
            <footer />
        </>
    );
}
export default App;
