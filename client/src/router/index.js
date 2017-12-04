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
import widgetCommandsHolder from '@/components/widgetCommandsHolder';

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


import Journal from '@/components/Journal';
import Admin from '@/components/Admin';
import adminBlockUser from '@/components/adminBlockUser';
import adminJournal from '@/components/adminJournal';
import requestWidget from '@/components/requestWidget';
import requestCommand from '@/components/requestCommand';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  routes: [{
    path: '/',
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
    path: '/widgets/:widgetId/commands/OpenLink/:commandId',
    name: 'openLinkCommand',
    component: openLinkCommand
  },
  {
    path: '/widgets/:widgetId/commands/ShutDown/:commandId',
    name: 'ShutDown',
    component: shutDownCommand,
    props: true
  },
  {
    path: '/widgets/:widgetId/commands/Hibernate/:commandId',
    name: 'Hibernate',
    component: hibernateCommand
  },
  {
    path: '/widgets/:widgetId/commands/Restart/:commandId',
    name: 'Restart',
    component: restartCommand
  },
  {
    path: '/widgets/:widgetId/commands/LogOff/:commandId',
    name: 'LogOff',
    component: logOffCommand
  },
  {
    path: '/clear-cache',
    name: 'clearCacheCommand',
    component: clearCacheCommand
  },
  {
    path: '/widgets/:widgetId/commands/FindDuplicates/:commandId',
    name: 'FindDuplicates',
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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin-block-user',
    name: 'adminBlockUser',
    component: adminBlockUser
  },
  {
    path: '/admin-journal',
    name: 'adminJournal',
    component: adminJournal
  },
  {
    path: '/request-widget',
    name: 'requestWidget',
    component: requestWidget
  },
  {
    path: '/request-command',
    name: 'requestCommand',
    component: requestCommand
  },
  {
    path: '/widgets/:widgetId/commands',
    name: 'widget',
    component: widgetCommandsHolder,
    props: true
  }
]
});
