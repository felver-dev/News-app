import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/newsSlice";
import categoryReducer from "./category/categorySlice";
import Category from "../components/Category";

const store = configureStore({
  reducer: {
    news: newsReducer,
    categories: categoryReducer,
  },
});

export { store };
