import { useCart } from '../../context/CartContext';
export const CartSummary = () => {
  const { getTotalItems, getTotal, checkOut, clearCart } = useCart();
  return (
    <>
      <p>Cantidad de productos: {getTotalItems()}</p>
      <p>Total a pagar: $ {getTotal()}</p>
      <button onClick={() => clearCart()}>Vaciar carrito</button>
      <button onClick={() => checkOut()}>FINALIZAR COMPRA</button>
    </>
  );
};
