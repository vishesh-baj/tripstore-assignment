import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    selectBook: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBook } = bookSlice.actions;

export default bookSlice.reducer;
