<template>
<div class="container">
    <h2>System commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerShutDown">
                <p class="widget-name">shut down</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerHibernate">
                <p class="widget-name">hibernate</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerLogOff">
                <p class="widget-name">log off</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerRestart">
                <p class="widget-name">restart</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let systemCommands = {
  name: "systemCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerShutDown: function() {
      this.$router.push("shut-down");
      //done
    },
    clickHandlerHibernate: function() {
      this.$router.push("hibernate");
      //done
    },
    clickHandlerLogOff: function() {
      this.$router.push("log-off");
      //done
    },
    clickHandlerRestart: function() {
      this.$router.push("restart");
      //done
    },
  }
};

Vue.component("system-commands", systemCommands);
export default systemCommands;
</script>

<style media="screen">
.container h2 {
  margin-top: 20px;
}
.widget {
  height: 150px;
  border: 1px solid #aef;
  margin-top: 30px;
  padding: 10px;
}
.widget-name {
  font-weight: bold;
}
</style>
