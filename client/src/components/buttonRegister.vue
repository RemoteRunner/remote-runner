<template>
  <div class="button-register" v-on:click="clickHandler">
    <span>
      {{buttonText}}
    </span>
  </div>
</template>

<script>
  import Vue from 'vue';

  let buttonRegister = {
    name: 'buttonRegister',
    data() {
      return {
        buttonText: 'Register'
      }
    },
    methods: {
      clickHandler: function () {
        this.$router.push('register');
      }
    }
  }

  Vue.component('button-register', buttonRegister);
  export default buttonRegister;

</script>

<style media="screen">
  div.button-register {
    height: auto;
    width: 50%;
    padding: 20px;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid #155799;
    color: #155799;
    font-weight: 900;
    font-size: 25px;
    cursor: pointer;
  }

  div.button-register:hover {
    background-color: #155799;
    color: white;
    border-color: white;
  }

  div.button-register span {
    font-size: 1em;
  }

  @media screen and (max-width: 576px) {
    div.button-register {
      width: 100%;
      font-size: 22px;
    }
  }

</style>
