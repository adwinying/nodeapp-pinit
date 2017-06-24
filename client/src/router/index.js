import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import MyPins from '../components/MyPins';

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
      path: '/mypins',
      name: 'MyPins',
      component: MyPins,
    },
  ],
});
