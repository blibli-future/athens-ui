import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './component/LoginForm.vue';
import Request from './component/Request.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginPage
    }, {
      path: '/index',
      component: Request
    }
  ]
});