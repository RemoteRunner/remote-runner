<template>
  <div class="button-login" v-on:click="clickHandler">
    <span>{{buttonText}} </span>
  </div>
</template>

<script>
import Vue from 'vue';

let buttonLogin =  {
  name: 'buttonLogin',
  data() {
    return {
      buttonText: 'Login'
    }
  },
  methods: {
    clickHandler: function () {
      this.$router.push('login');
    }
  }
}

Vue.component('button-login', buttonLogin);
export default buttonLogin;
</script>

<style media="screen">
  div.button-login {
    height: auto;
    width: 50%;
    float: right;
    padding: 20px;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid #159957;
    color: #159957;
    font-weight: 900;
    font-size: 25px;
    cursor: pointer;
  }
  div.button-login:hover{
    background-color: #159957;
    color: white;
    border-color: white;
  }
  div.button-login span {
    font-size: 1em;
  }

  @media screen and (max-width: 576px){
    div.button-login {
      width: 100%;
      font-size: 22px;
    }
  }
</style>
