<template>
<div class="container">
    <h2>List of widgets</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerStorage">
                <p class="widget-name">Storage</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4" >
            <div class="widget" v-on:click="clickHandlerConsole">
                <p class="widget-name">Console</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerSystem">
                <p class="widget-name">System</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerDevices">
                <p class="widget-name">Devices</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerBrowser">
                <p class="widget-name">Browser</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerProcesses">
                <p class="widget-name">Processes</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let widgetsHolder = {
  name: "widgetsHolder",
  data() {
    return {};
  },
  methods: {
    clickHandlerStorage: function() {
      this.$router.push("storage-commands");
    },
    clickHandlerConsole: function() {
      this.$router.push("console-commands");
    },
    clickHandlerSystem: function() {
      this.$router.push("system-commands");
    },
    clickHandlerDevices: function() {
      this.$router.push("devices-commands");
    },
    clickHandlerBrowser: function() {
      this.$router.push("browser-commands");
    },
    clickHandlerProcesses: function() {
      this.$router.push("process-commands");
    },
  }
};

Vue.component("widgets-holder", widgetsHolder);
export default widgetsHolder;
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
