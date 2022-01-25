import { createSlice } from "@reduxjs/toolkit";
import productImageOne from "../../images/image-1.jpg";
import productImageTwo from "../../images/image-2.jpg";
import productImageThree from "../../images/image-3.jpg";
import productImageFour from "../../images/image-4.jpg";

const initialState = [
   { id: 0, title: 'Product One', price: 250000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore recusandae sint placeat sapiente porro enim ullam quibusdam, totam dicta consectetur esse eos at, unde cumque laboriosam. Aliquid, atque nam.", image: productImageOne },
   { id: 1, title: 'Product Two', price: 500000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore recusandae sint placeat sapiente porro enim ullam quibusdam, totam dicta consectetur esse eos at, unde cumque laboriosam. Aliquid, atque nam.", image: productImageTwo },
   { id: 2, title: 'Product Three', price: 750000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore recusandae sint placeat sapiente porro enim ullam quibusdam, totam dicta consectetur esse eos at, unde cumque laboriosam. Aliquid, atque nam.", image: productImageThree },
   { id: 3, title: 'Product Four', price: 1000000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore recusandae sint placeat sapiente porro enim ullam quibusdam, totam dicta consectetur esse eos at, unde cumque laboriosam. Aliquid, atque nam.", image: productImageFour }
];

export const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      methodOne(state) {
         ++state.value;
      },
      methodTwo(state) {
         --state.value;
      }
   }
});

export const { methodOne, methodTwo } = productsSlice.actions;
export default productsSlice.reducer;