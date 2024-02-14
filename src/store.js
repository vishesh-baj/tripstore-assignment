import { configureStore } from "@reduxjs/toolkit";
import choiceReducer from "./features/choice";
export const store = configureStore({
  reducer: {
    choice: choiceReducer,
  },
});
