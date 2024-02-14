import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    setChoice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setChoice } = choiceSlice.actions;

export default choiceSlice.reducer;
