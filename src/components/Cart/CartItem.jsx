import { Link } from 'react-router-dom';
export const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price } = item;
  return (
    <>
      <p>
        <Link to={`/product/${id}`}>{name}</Link> | $ {price} |{' '}
        <button onClick={() => removeFromCart(id)}>Eliminar</button>
      </p>
    </>
  );
};
