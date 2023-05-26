import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isSearch: false,
    isFixed: false,
  },
  reducers: {
    changeIsSearch(state, { payload }) {
      state.isSearch = payload;
    },
    changeIsFiexd(state, { payload }) {
      state.isFixed = payload;
    },
  },
});

export default mainSlice.reducer;
export const { changeIsSearch, changeIsFiexd } = mainSlice.actions;
