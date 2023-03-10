

export default [
  { 
    path: '/Home',
    component: ()=>import('@/pages/Home'),
    name:'首页'
  },
  { 
    path: '/login',
    component: ()=>import('@/pages/Login'),
    name:'登录'
  },
]