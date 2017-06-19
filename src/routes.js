import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './component/LoginForm.vue';
import Request from './component/Request.vue';
import Upload from './component/absensi/Upload.vue';
import Shift from './component/absensi/Shift/Shift.vue';
import NewShift from './component/absensi/Shift/NewShift.vue';
import Presensi from './component/absensi/Presensi.vue';
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
    },{
      path:'/upload',
      component:Upload
    },{
      path:'/shift',
          component: Shift
      },{
          path:'/shift/add',
          component: NewShift
      },{
          path:'/presensi',
          component: Presensi
      }
  ]
});