import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const openRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('@/views/Home.vue'),
    meta: { hidden: true },
  },
  {
    path: '/ind',
    name: 'layout',
    component: Layout,
    redirect: '/ind/index',
    meta: { title: '首页',  },
    children: [
      {
        path: "index",
        component: () => import('@/views/About.vue'),
        props: true,
        meta: { title: "首页", icon: '<AndroidOutlined />' },
      },
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    redirect: '/test/test1',
    meta: { title: '测试',  },
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/test1.vue'),
        meta: {title: '测试1', icon: '<AppleOutlined />'}
      },
      {
        path: 'hidden',
        name: 'hidden',
        component: () => import('@/views/test1.vue'),
        meta: {title: '测试1', icon: '<AppleOutlined />', hidden: true}
      },
      {
        path: 'test2',
        name: 'test2',
        component: () => import('@/views/test2.vue'),
        meta: {title: '测试2', icon: '<WindowsOutlined />'},
        children: [
          {
            path: 'test3',
            name: 'test3',
            component: () => import('@/views/test3.vue'),
            meta: {title: '测试3', icon: '<IeOutlined />'}
          },
          {
            path: 'hidden',
            name: 'hidden',
            component: () => import('@/views/test1.vue'),
            meta: {title: '测试1', icon: '<AppleOutlined />', hidden: true}
          },
        ]
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: openRoutes
})

export default router
