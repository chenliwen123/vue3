export default [
  {
    path: '/',
    component: () => import('@/pages/Home'),
    name: '首页',
  },
  {
    path: '/Home',
    redirect: '/',
    component: () => import('@/pages/Home'),
    name: '首 页',
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    name: '登录',
  },
];
