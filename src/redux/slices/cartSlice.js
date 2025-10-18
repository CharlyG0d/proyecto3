import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice ({ 
  name: "cart", 
  initialState: { 
    item: [], 
  }, 
  reducers:{ 
    addToCart: (state, action) =>{ 
      const product = action.payload; 
      const existing = state.item.find((item) => item.id === product.id); 
      if(existing){ existing.qty += 1; } 
      else { state.item.push({ ...product, qty: 1}); } }, 
      removeFromCart: (state, action) =>{ state.item = state.item.filter((item) => item.id !== action.payload); }, 
      clearCart: (state) =>{ state.item = []; }, }, }); 
      
      export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; 
      export const selectCartItems = (state) => state.cart.item; export default cartSlice.reducer;