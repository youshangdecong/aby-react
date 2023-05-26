import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeHighscore,
  getHomeDiscount,
  getHomeRecommend,
  getHomeLongfor,
  getHomeGoodprice,
  getHomePlus,
} from "@/network/api/home";

// 异步请求
export const fetchHomeData = createAsyncThunk("home", (_, { dispatch }) => {
  getHomeHighscore().then((res) => dispatch(changeHomeHighscore(res)));
  getHomeDiscount().then((res) => dispatch(changeHomeDiscount(res)));
  getHomeRecommend().then((res) => dispatch(changeHomeRecommend(res)));
  getHomeLongfor().then((res) => dispatch(changeHomeLongfor(res)));
  getHomeGoodprice().then((res) => dispatch(changeHomeGoodprice(res)));
  getHomePlus().then((res) => dispatch(changePlus(res)));
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeHighscore: {},
    homeDiscount: {},
    homeRecommend: {},
    homeLongfor: {},
    homeGoodprice: {},
    homePlus: {},
  },
  reducers: {
    changeHomeHighscore(state, { payload }) {
      state.homeHighscore = payload;
    },
    changeHomeDiscount(state, { payload }) {
      state.homeDiscount = payload;
    },
    changeHomeRecommend(state, { payload }) {
      state.homeRecommend = payload;
    },
    changeHomeLongfor(state, { payload }) {
      state.homeLongfor = payload;
    },
    changeHomeGoodprice(state, { payload }) {
      state.homeGoodprice = payload;
    },
    changePlus(state, { payload }) {
      state.homePlus = payload;
    },
  },
});

export default homeSlice.reducer;

export const {
  changeHomeHighscore,
  changeHomeDiscount,
  changeHomeRecommend,
  changeHomeLongfor,
  changeHomeGoodprice,
  changePlus,
} = homeSlice.actions;
