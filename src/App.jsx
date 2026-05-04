import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Layout } from './components/Layout/Layout';
function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                {/* <Route path='/product/:id' element={<ItemDetailContainer />} /> */}
                <Route
                    path='/category/:categoryId'
                    element={<ItemListContainer />}
                />
            </Routes>
        </Layout>
    );
}
export default App;
