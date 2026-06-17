import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CartList } from './CartList';
import { CartSummary } from './CartSummary';
export const CartView = () => {
  const { cart } = useCart();
  return (
    <section>
      <h1>CARRITO DE COMPRAS</h1>
      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p>No hay productos en el carrito</p>
        </>
      )}
      <Link to="/">Volver al inicio</Link>
    </section>
  );
};
