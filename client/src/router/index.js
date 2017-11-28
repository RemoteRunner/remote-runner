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
import widgetsHolder from '@/components/widgetsHolder';
import commandList from '@/components/commandList';
import storageCommands from '@/components/storageCommands';
import devicesCommands from '@/components/devicesCommands';
import consoleCommands from '@/components/consoleCommands';
import processCommands from '@/components/processCommands';
import browserCommands from '@/components/browserCommands';
import systemCommands from '@/components/systemCommands';
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
  {
    path: '/commands',
    name: 'Commands',
    component: commandList
  },
  {
    path: '/widgets',
    name: 'Widgets',
    component: widgetsHolder
  },
  {
    path: '/storage-commands',
    name: 'storageCommands',
    component: storageCommands
  },
  {
    path: '/devices-commands',
    name: 'devicesCommands',
    component: devicesCommands
  },
  {
    path: '/console-commands',
    name: 'consoleCommands',
    component: consoleCommands
  },
  {
    path: '/process-commands',
    name: 'processCommands',
    component: processCommands
  },
  {
    path: '/browser-commands',
    name: 'browserCommands',
    component: browserCommands
  }
  ,
  {
    path: '/system-commands',
    name: 'systemCommands',
    component: systemCommands
  }
]
});
