import cartReducer, { addToCart, removeFromCart, clearCart } from "../redux/slices/cartSlice";

describe("cartSlice", () => {
  test("agrega producto al carrito", () => {
    const initialState = { items: [] };
    const product = { id: 1, title: "Camisa" };
    const newState = cartReducer(initialState, addToCart(product));
    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].title).toBe("Camisa");
  });

  test("elimina producto del carrito", () => {
    const initialState = { items: [{ id: 1, title: "Camisa" }] };
    const newState = cartReducer(initialState, removeFromCart(1));
    expect(newState.items).toHaveLength(0);
  });

  test("limpia el carrito", () => {
    const initialState = { items: [{ id: 1, title: "Camisa" }] };
    const newState = cartReducer(initialState, clearCart());
    expect(newState.items).toHaveLength(0);
  });
});
