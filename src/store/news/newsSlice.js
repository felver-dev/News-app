import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "News 1",
    description: "lkjsahlhgasdkhgsakdhgskdhgksadhf",
    catId: 1,
  },
  {
    id: 2,
    title: "News 2",
    description: "lkjsahlhgasdkhgsakdhgskdhgksadhf",
    catId: 1,
  },
  {
    id: 3,
    title: "News 3",
    description: "lkjsahlhgasdkhgsakdhgskdhgksadhf",
    catId: 2,
  },
  {
    id: 4,
    title: "News 4",
    description: "lkjsahlhgasdkhgsakdhgskdhgksadhf",
    catId: 5,
  },
];
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export const selectAllNews = (state) => state.news;
export const {} = newsSlice.actions;
export default newsSlice.reducer;
