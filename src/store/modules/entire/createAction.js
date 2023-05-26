import { fetchGetEntireInfo } from "@/network/api/entire";
import {
  CHANGE_ENTIRE_INFO,
  CHANGE_IS_SHOW_COVER,
  CHANGE_PAGE,
  CHANGE_SIZE,
} from "./consts";

export const changEntireInfo = (payload) => {
  return {
    type: CHANGE_ENTIRE_INFO,
    payload: payload,
  };
};

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  };
};

export const changeSize = (payload) => {
  return {
    type: CHANGE_SIZE,
    payload: payload,
  };
};

export const changeIsShowCover = (payload) => {
  return {
    type: CHANGE_IS_SHOW_COVER,
    payload: payload,
  };
};

export const asyncChangeEntireInfo = () => {
  return function (dispath, getstate) {
    dispath(changeIsShowCover(true));

    const { page, size } = getstate().entire;

    const offset = (page - 1) * size;
    fetchGetEntireInfo(offset, size).then((res) => {
      dispath(changEntireInfo(res));
      dispath(changeIsShowCover(false));
    });
  };
};
