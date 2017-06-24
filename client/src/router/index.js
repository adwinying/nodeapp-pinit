import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import UserPins from '../components/UserPins';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/:userId',
      name: 'UserPins',
      component: UserPins,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
