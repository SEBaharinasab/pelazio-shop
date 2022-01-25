import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/products.slice";

export const store = configureStore({
   reducer: {
      products: productsSlice
   },
});