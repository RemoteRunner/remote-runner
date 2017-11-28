<template>
<div class="container">
    <h2>Devices commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerGetCursorPosition">
                <p class="widget-name">get cursor position</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerSetCursorPosition">
                <p class="widget-name">set cursor position</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerLeftClick">
                <p class="widget-name">left click</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
    <div class="row">
         
                <div class="col-12 col-md-4" >
            <div class="widget" v-on:click="clickHandlerLeftDoubleClick">
                <p class="widget-name">left double click</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerRightClick">
                <p class="widget-name">right click</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <!-- <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerDuplicates">
                <p class="widget-name">find duplicates</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div> -->
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
    clickHandlerGetCursorPosition: function() {
      this.$router.push("get-cursor-position");
    },
    clickHandlerSetCursorPosition: function() {
      this.$router.push("set-cursor-position");
    },
    clickHandlerLeftClick: function() {
      this.$router.push("left-click");
    },
    clickHandlerLeftDoubleClick: function() {
      this.$router.push("left-double-click");
    },
    clickHandlerRightClick: function() {
      this.$router.push("right-click");
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
  border: 1px solid #aef;
  margin-top: 30px;
  padding: 10px;
}
.widget-name {
  font-weight: bold;
}
</style>
