import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FormContainer } from './components/Form/FormContainer';
function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route
                        path='/product/:id'
                        element={<ItemDetailContainer />}
                    />
                    <Route path='/carrito' element={<h1>Carrito</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
export default App;
