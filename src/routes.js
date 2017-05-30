import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './component/LoginForm.vue';
import Request from './component/Request.vue';
import Container from './component/Container.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginPage
    }, {
      path: '/app',
      component: Container,
      children: [
        {
          path: 'request',
          component: Request
        }
      ]
    }
  ]
});