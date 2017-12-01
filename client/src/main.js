// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

var myHeaders = new Headers();
myHeaders.append('Access-Control-Request-Headers','*');
myHeaders.append('Access-Control-Request-Method','*');
myHeaders.append('Access-Control-Request-Headers','*');

var myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default',
               headers: myHeaders
            };

fetch(new Request('http://localhost:5000/commands', myInit))
    .then(function(response) {
        console.log(response);
    });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
