import { createWebHistory, createRouter } from 'vue-router';
import Login from '../components/LoginPage.vue';
import ShopList from '../components/ShopList.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/shoplist',
    name: 'ShopList',
    component: ShopList,
    beforeEnter: (to, from, next) => {
      const { username, password } = to.query;

      if (username && password) {
        next();
      } else {
        next('/');
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory('/VueSamples/'),
  routes
});

export default router;