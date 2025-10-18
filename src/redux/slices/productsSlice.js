import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const { data } = await axios.get(`${BASE_URL}/category/${category}`);
    return { category, data };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    byCategory: {},
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        const { category, data } = action.payload;
        state.byCategory[category] = data;
      });
  },
});

export default productsSlice.reducer;


export const selectAllProducts = (state) => state.products.all;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsByCategory = (state, category) =>
  state.products.byCategory[category] || [];
