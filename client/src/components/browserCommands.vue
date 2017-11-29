<template>
<div class="container">
    <h2>Browser commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerOpenLink">
                <p class="widget-name">open link</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let browserCommands = {
  name: "browserCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerOpenLink: function() {
      this.$router.push("open-link");
      //done
    }
  }
};

Vue.component("browser-commands", browserCommands);
export default browserCommands;
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
