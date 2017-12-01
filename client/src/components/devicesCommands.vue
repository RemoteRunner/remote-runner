<template>
<div class="container">
    <h2>Devices commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerMouse">
                <p class="widget-name">Mouse</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let devicesCommands = {
  name: "devicesCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerMouse: function() {
      this.$router.push("mouse-command");
      //done
    }
  }
};

Vue.component("devices-commands", devicesCommands);
export default devicesCommands;
</script>

<style media="screen">
.container h2 {
  margin-top: 20px;
}
.widget {
  height: 150px;
  border: 7px solid #159957;
  margin-top: 30px;
  padding: 10px;
}
.widget-name {
  font-weight: bold;
}
</style>
