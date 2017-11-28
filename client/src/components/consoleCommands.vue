<template>
<div class="container">
    <h2>Console commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerConsole">
                <p class="widget-name">enter command</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
import Vue from "vue";

let consoleCommands = {
  name: "consoleCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerConsole: function() {
      this.$router.push("console");
    }
  }
};

Vue.component("console-commands", consoleCommands);
export default consoleCommands;
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
