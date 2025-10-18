import { useDispatch, useSelector } from "react-redux";

import { CartMain, Heading, ContinueBtn, CartContainer, CartList, Subtotal, CartTitle } from "./styled";
import ItemCart from "./cartItem";
import { removeFromCart, selectCartItems } from "../../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = items.length > 0 ? 5 : 0;
  const tax = items.length > 0 ? 4 : 0;
  const total = subtotal + shipping + tax;

  return (
    <CartMain>
      <CartTitle>Carrito de compra</CartTitle>

      <Heading>
        <h1>Mi Carrito</h1>
        <ContinueBtn to="/">Continuar Comprando</ContinueBtn>
      </Heading>

      <CartContainer>
        <CartList>
          {items.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            items.map((item) => (
              <ItemCart
                key={item.id}
                item={item}
                removeItem={(id) => dispatch(removeFromCart(id))}
              />
            ))
          )}
        </CartList>
      </CartContainer>

      {items.length > 0 && (
        <Subtotal>
          <ul>
            <li><span className="label">Subtotal:</span><span className="value">${subtotal.toFixed(2)}</span></li>
            <li><span className="label">Envío:</span><span className="value">${shipping.toFixed(2)}</span></li>
            <li><span className="label">Impuestos:</span><span className="value">${tax.toFixed(2)}</span></li>
            <li className="final"><span className="label">Total:</span><span className="value">${total.toFixed(2)}</span></li>
          </ul>
        </Subtotal>
      )}
    </CartMain>
  );
};

export default Cart;
