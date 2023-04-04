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
  {
    path: '/Echarts_resize',
    component: () => import('@/pages/Echarts_resize'),
    name: 'echarts图表大小自由变换',
  },
  {
    path: '/computedvmodel',
    component: () => import('@/pages/computedvmodel'),
    name: 'computed和v-model使用',
  },
];
