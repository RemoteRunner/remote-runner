<template>
<div v-on:click="initializer" class="">
  <quick-menu :menu-count=menuCount :icon-class=iconClass :menu-url-list=urlList></quick-menu>
</div>
</template>

<script>
import Vue from 'vue';
import quickMenu from 'vue-quick-menu';
import Router from '../router/index.js';

Vue.use(Router);

let defaultMenu = {
  components: {
    quickMenu
  },
  data() {
    return {
      menuCount: 4,
      urlList: ['/#', '/about', '/journal', '/user-settings'],
      iconClass: ['1', '2', '3', '4']
    }
  },
  methods: {
    initializer: function() {
      console.log('works')
      let homeLink = document.querySelector('.quick-menu a[href*="#"]');
      homeLink.addEventListener('click', function() {
      this.$router.push('about');
      })
    }
  }
}
Vue.component('quick-menu2', defaultMenu);
export default defaultMenu;
</script>

<style media="screen">

</style>
