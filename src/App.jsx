import { Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CreateGameContainer } from './components/CreateGameForm/CreateGameContainer';
import { FormContainer } from './components/Form/FormContainer';
import { CartView } from './components/Cart/CartView';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<FormContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
