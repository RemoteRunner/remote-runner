<template>
<div class="container">
    <h2>Devices commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerProcessList">
                <p class="widget-name">process list</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerProcessKill">
                <p class="widget-name">kill process</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerProcessStart">
                <p class="widget-name">start process</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let processCommands = {
  name: "processCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerProcessList: function() {
      this.$router.push("process-list");
    },
    clickHandlerProcessKill: function() {
      this.$router.push("process-kill");
    },
    clickHandlerProcessStart: function() {
      this.$router.push("process-start");
    }
  }
};

Vue.component("process-commands", processCommands);
export default processCommands;
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
