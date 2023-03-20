import axios from 'axios';
import { serialize } from '@/utils';
import NProgress from 'nprogress'; // progress bar
import errorCode from '@/const/errorCode.js';
// import router from '@/router/router';
import { ElMessage } from 'element-plus';
import 'nprogress/nprogress.css';
// import store from '@/store'; // progress bar style
axios.defaults.timeout = 300000;
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
  showSpinner: false,
});

// HTTPrequest拦截
axios.interceptors.request.use(
  (config) => {
    NProgress.start(); // start progress bar
    const isToken = (config.headers || {}).isToken === false;
    // let token = store.getters.access_token;
    let token = '';
    if (token && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + token; // token
    }
    // headers中配置serialize为true开启序列化
    if (config.method === 'post' && config.headers.serialize) {
      config.data = serialize(config.data);
      delete config.data.serialize;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// HTTPresponse拦截
axios.interceptors.response.use(
  (res) => {
    NProgress.done();
    // 文件流，直接过
    if (res.responseType === 'blob') {
      return res.data;
    }
    const status = Number(res.status) || 200;
    const message = res.data.msg || errorCode[status] || errorCode['default'];
    if (status === 401) {
      // store.dispatch('FedLogOut').then(() => {
      //   router.push({ path: '/login' });
      // });
      return;
    }

    if (status !== 200 || res.data.code === 1) {
      ElMessage({
        message: message,
        type: 'error',
      });
      return Promise.reject(new Error(message));
    }
    return res.data;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(new Error(error));
  }
);
export default axios;
