const config = {
  development: {
    prefix: '/api-demo', // 网关请求前缀
  },
  sit: {
    prefix: '/api-demo',
  },
  uat: {
    prefix: '/api-demo',
  },
  pre: {
    prefix: '/api-demo',
  },
  prod: {
    prefix: '/api-demo',
  },
  gray: {
    prefix: '/api-demo',
  },
};
export default config[import.meta.env.MODE] || config[`prod`];
