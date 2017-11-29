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
import openLinkCommand from '@/components/openLinkCommand';
import hibernateCommand from '@/components/hibernateCommand';
import clearCacheCommand from '@/components/clearCacheCommand';
import restartCommand from '@/components/restartCommand';
import mouseCommand from '@/components/mouseCommand';
import findDuplicatesCommand from "@/components/findDuplicatesCommand";
import logOffCommand from '@/components/logOffCommand';
import shutDownCommand from '@/components/shutDownCommand';
import killProcessCommand from '@/components/killProcessCommand';
import startProcessCommand from '@/components/startProcessCommand';
import processListCommand from '@/components/processListCommand';
import formatDriveCommand from '@/components/formatDriveCommand';
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
  },
  {
    path: '/open-link',
    name: 'openLinkCommand',
    component: openLinkCommand
  },
  {
    path: '/shut-down',
    name: 'shutDownCommand',
    component: shutDownCommand
  },
  {
    path: '/hibernate',
    name: 'hibernateCommand',
    component: hibernateCommand
  },
  {
    path: '/restart',
    name: 'restartCommand',
    component: restartCommand
  },
  {
    path: '/log-off',
    name: 'logOffCommand',
    component: logOffCommand
  },
  {
    path: '/clear-cache',
    name: 'clearCacheCommand',
    component: clearCacheCommand
  },
  {
    path: '/find-duplicates',
    name: 'findDuplicatesCommand',
    component: findDuplicatesCommand
  },
  {
    path: '/mouse-command',
    name: 'mouseCommand',
    component: mouseCommand
  },
  {
    path: '/process-kill',
    name: 'killProcessCommand',
    component: killProcessCommand
  },
  {
    path: '/process-start',
    name: 'startProcessCommand',
    component: startProcessCommand
  },
  {
    path: '/process-list',
    name: 'processListCommand',
    component: processListCommand
  },
  {
    path: '/format-drive',
    name: 'formatDriveCommand',
    component: formatDriveCommand
  }
]
});
