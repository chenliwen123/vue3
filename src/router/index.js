export default [
  {
    path: '/',
    component: () => import('@/pages/Layout'),
    name: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    component: () => import('@/pages/Home'),
    name: 'home',
    meta: { title: '首页', icon: 'Document' },
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    name: 'login',
    meta: { title: '登陆页面', icon: 'ChatRound' },
  },
  {
    path: '/Echarts_resize',
    component: () => import('@/pages/Echarts_resize'),
    name: 'echartsresize',
    meta: { title: '监听dom元素大小变化', icon: 'Headset' },
  },
  {
    path: '/computedvmodel',
    component: () => import('@/pages/computedvmodel'),
    name: 'computedvmodel',
    meta: { title: '双向数据绑定', icon: 'Switch' },
  },
  {
    path: '/audio',
    component: () => import('@/pages/audio'),
    name: 'audio',
    meta: { title: '音频可视化', icon: 'Headset' },
  },
];
