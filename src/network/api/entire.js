import request from "../index";

export function fetchGetEntireInfo(offset = 0, size = 20) {
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
