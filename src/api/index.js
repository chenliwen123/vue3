import SERVER from './server';
import axios from './fetch';

/**@function 登陆接口 */
export const doLogin = (params) =>
  axios.post(`${SERVER.qfc_base_user}/security/login`, params);

/**@function 获取登陆接口的密码加密附 */
export const getPublicKey = (params) =>
  axios.get(`${SERVER.qfc_base_user}/encrypt/getPublicKey`, { params });
