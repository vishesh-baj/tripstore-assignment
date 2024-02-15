import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category";
import bookReducer from "./features/book";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    book: bookReducer,
  },
});
