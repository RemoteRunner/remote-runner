import Meta from 'vue-meta';
import Vue from 'vue';
import Router from 'vue-router';
// import Menu from '@/components/Menu';
import buttonLogin from '@/components/buttonLogin';
import buttonRegister from '@/components/buttonRegister';
import dragComponent from '@/components/Draggable';
import Home from '@/components/Home';
import About from '@/components/About';
import registerForm from '@/components/registerForm';
import loginForm from '@/components/loginForm';
import settingsForm from '@/components/settingsForm';
import Journal from '@/components/Journal';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: registerForm
  },
  {
    path: '/login',
    name: 'Login',
    component: loginForm
  },
  {
    path: '/settings',
    name: 'Settings',
    component: settingsForm
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/drag',
    name: 'Drag',
    component: dragComponent
  },
]
});
