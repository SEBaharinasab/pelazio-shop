import { createSlice } from "@reduxjs/toolkit";
import productImageOne from "../../images/image-1.jpg";
import productImageTwo from "../../images/image-2.jpg";
import productImageThree from "../../images/image-3.jpg";
import productImageFour from "../../images/image-4.jpg";

const initialState = {
   products: [
      { id: "pl-8538", title: 'Product One', price: 250000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore recusandae sint placeat sapiente porro enim ullam quibusdam, totam dicta consectetur esse eos at, unde cumque laboriosam. Aliquid, atque nam.", image: productImageOne },
      { id: "pl-3379", title: 'Product Two', price: 500000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eaque voluptate beatae obcaecati recusandae, maxime aliquid quisquam eum, maiores numquam ex tenetur magni porro esse earum corporis ad. Ipsam, quibusdam.", image: productImageTwo },
      { id: "pl-8564", title: 'Product Three', price: 750000, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus, ducimus libero consectetur repellat dolore impedit temporibus asperiores incidunt. Voluptates exercitationem sit tempora magnam ratione non architecto. Facere, soluta! Quasi.", image: productImageThree },
      { id: "pl-3576", title: 'Product Four', price: 1000000, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis ipsum labore, voluptatum rerum, sapiente incidunt nihil odio enim, nemo atque! Atque dignissimos neque, eos nesciunt voluptatibus rem voluptatem! Dolorum!", image: productImageFour }
   ],
   cart: [
      { userId: 0, productId: "pl-3379", count: "12" }
   ],
   users: [
      { id: 0, name: 'Ehsan' }
   ]
};

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