import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './component/LoginForm.vue';
import Request from './component/Request.vue';
import Upload from './component/absensi/Upload.vue';
import Shift from './component/absensi/shift/Shift.vue';
import NewShift from './component/absensi/shift/NewShift.vue';
import Presensi from './component/absensi/Presensi.vue';
import Employee from './component/absensi/employee/Employee.vue';
import NewEmployee from './component/absensi/employee/NewEmp.vue';
import Report from './component/Report.vue';
import Approval from  './component/Approval.vue';
import Home from './component/Home.vue';


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
        }, {
            path:'/upload',
            component:Upload
        }, {
            path:'/shift',
            component: Shift
        },{
            path:'/shift/add',
            component: NewShift
        },{
            path:'/presensi',
            component: Presensi
        },{
            path:'/employee',
            component: Employee
        },{
            path:'/employee/add',
            component: NewEmployee
        },{
            path:'/report',
            component: Report
        }, {
            path: '/approval',
            component: Approval
        },  {
            path: '/home',
            component: Home
        }
  ]
});