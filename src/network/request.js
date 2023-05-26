import axios from "axios";

export class Requset {
  constructor(envconfig) {
    const { TIME_OUT, BASE_URL } = envconfig;
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });
    this.instance.interceptors.request.use(
      (config) => {
        console.log("请求拦截");
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("响应拦截");
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
