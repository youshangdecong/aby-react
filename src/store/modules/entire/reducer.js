import { createStore } from "redux";
import {
  CHANGE_ENTIRE_INFO,
  CHANGE_IS_SHOW_COVER,
  CHANGE_PAGE,
  CHANGE_SIZE,
} from "./consts";

const initState = {
  entireInfo: {},
  isShowCover: false,
  page: 1,
  size: 20,
};

export default function entireReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_ENTIRE_INFO:
      return { ...state, entireInfo: payload };
    case CHANGE_IS_SHOW_COVER:
      return { ...state, isShowCover: payload };
    case CHANGE_PAGE:
      return { ...state, page: payload };
    case CHANGE_SIZE:
      return { ...state, size: payload };
    default:
      return state;
  }
}
