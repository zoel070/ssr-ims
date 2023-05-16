import axios from 'axios'
import { Message } from "element-ui";
axios.defaults.timeout = 20000;

// 添加一个请求拦截器（ 一般用于鉴权 )
axios.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      newConfig.headers['authorization'] = TOKEN;
    }
    return newConfig;
  },
  error => Promise.reject(error)
);

// 全局错误处理
const handleErrorRequest = error => {
  const { response } = error;
  const status = response ? response.status : 408;
  if (response) {
    const { data } = response;
    const { errors } = data;
    const message = data.message || "服务器发送错误，请稍后再试";
    if (status === 401) {
      console.log("没有登录");
      localStorage.clear();
      console.log(error);
    } else if (status === 419) {
      console.log("页面过期");
      localStorage.clear();
    } else if (status === 422 || status === 423 || status === 429) {
      Object.keys(errors).forEach(errorKey => {
        const errorValue = errors[errorKey].join("\n");
        Message.error(errorValue);
      });
    } else {
      Message.error(message);
    }
  } else {
    Message.error("网络超时");
  }
};

axios.interceptors.response.use(res => {
  return res.data.data;
}, error => {
  handleErrorRequest(error);
  return Promise.reject(error)
})

export default {
  post: function (url = '', data = {}, config) {
    return axios.post(url, data, config);
  },
  put: function (url = '', data = {}, config) {
    return axios.put(url, data, config);
  },
  get: function (url, params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS)
  },
  delete: function (url = '', params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS)
  }
}