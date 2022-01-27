import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   darkMode: false,
};

export const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      changeDarkMode(state) {
         state.darkMode = !state.darkMode;
      }
   }
});

export const { changeDarkMode } = themeSlice.actions;
export default themeSlice.reducer;