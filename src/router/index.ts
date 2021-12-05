import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index'),
  },
  {
    path: '/404',
    component: () => import('@/views/404/index'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.matched.length === 0) {
    next('/404');
  } else {
    next();
  }
});

export default router;
