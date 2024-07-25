import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  {
    id: 0,
    catName: "All",
  },
  {
    id: 1,
    catName: "Sport",
  },
  {
    id: 2,
    catName: "Techs",
  },
  {
    id: 3,
    catName: "Medecine",
  },
  {
    id: 4,
    catName: "Science",
  },
  {
    id: 5,
    catName: "AI",
  },
  {
    id: 6,
    catName: "Economy",
  },
  {
    id: 7,
    catName: "Politics",
  },
];

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await axios.get("https://jsonplaceholder.org/users");

    return response.data;
  }
);
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectAllCats = (state) => state.categories;
export const {} = categorySlice.actions;
export default categorySlice.reducer;
