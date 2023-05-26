import request from "../index";

export function getHomeHighscore() {
  return request.get({ url: "/home/highscore" });
}

//获取折扣请求的数据
export function getHomeDiscount() {
  return request.get({ url: "/home/discount" });
}
//获取向往城市数据
export function getHomeLongfor() {
  return request.get({ url: "/home/longfor" });
}

//获取佛山房源数据
export function getHomeRecommend() {
  return request.get({ url: "/home/hotrecommenddest" });
}

//高性价比
export function getHomeGoodprice() {
  return request.get({ url: "/home/goodprice" });
}

// plus房源
export function getHomePlus() {
  return request.get({ url: "/home/plus" });
}
