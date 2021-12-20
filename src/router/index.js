/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Base from '../views/Base.vue';
import Home from '../views/Home.vue';
import Cards from '../views/Cards.vue';
import Payments from '../views/Payments.vue';
import Credit from '../views/Credit.vue';
import Profile from '../views/Profile.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/cards',
    name: 'cards',
    component: Cards,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'cards',
    component: Cards,
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments,
  },
  {
    path: '/credit',
    name: 'credit',
    component: Credit,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
