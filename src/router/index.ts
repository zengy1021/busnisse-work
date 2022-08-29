import React from 'react';
export default [
  {
    path: '/',
    meta: {
      title: '首页',
    },
    redirect: '/home',
    component: React.lazy(() => import('../layout/Home')),
  },
  {
    path: '/userMember',
    meta: {
      title: '会员',
    },
    redirect: '/userMember',
    component: React.lazy(() => import('../layout/UserMember')),
  },
  {
    path: '/shoppingCar',
    meta: {
      title: '购物车',
    },
    redirect: '/shoppingCar',
    component: React.lazy(() => import('../layout/ShoppingCar')),
  },
  {
    path: '/collection',
    meta: {
      title: '收藏',
    },
    redirect: '/collection',
    component: React.lazy(() => import('../layout/Collection')),
  },
];
