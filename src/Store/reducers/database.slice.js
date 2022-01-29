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
      { id: 0, userId: 0, productId: "pl-3379", count: "12" },
      { id: 1, userId: 0, productId: "pl-8564", count: "2" },
      { id: 2, userId: 0, productId: "pl-3576", count: "1" },
   ],
   users: [
      { id: 0, name: 'Ehsan' }
   ]
};

export const databaseSlice = createSlice({
   name: "database",
   initialState,
   reducers: {
      // Increase the number of shopping cart order items
      increaseCartOrder(state, action) {
         const itemIndex = state.cart.findIndex(item => item.id === action.payload);
         (state.cart[itemIndex].count)++;
      },

      // Decrease the number of shopping cart order items
      decreaseCartOrder(state, action) {
         const itemIndex = state.cart.findIndex(item => item.id === action.payload);
         (state.cart[itemIndex].count === 0)
            ? (state.cart[itemIndex].count = 0)
            : (state.cart[itemIndex].count--);
      },

      removeOrder(state, action) {
         const itemIndex = state.cart.findIndex(item => item.id === action.payload);
         state.cart.splice(itemIndex, 1);
      },
      addToCart(state, action) {
         state.cart.push({
            id: Date.now(),
            userId: 0,
            productId: action.payload.productId,
            count: action.payload.count
         });
      }
   }
});

export const { increaseCartOrder, decreaseCartOrder, removeOrder, addToCart } = databaseSlice.actions;
export default databaseSlice.reducer;