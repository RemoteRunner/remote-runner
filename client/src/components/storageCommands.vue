<template>
<div class="container">
    <h2>Storage commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerViewFile">
                <p class="widget-name">view file</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerEditFile">
                <p class="widget-name">edit file</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerSpace">
                <p class="widget-name">free space</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
    <div class="row">
         
                <div class="col-12 col-md-4" >
            <div class="widget" v-on:click="clickHandlerCache">
                <p class="widget-name">clean cache</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerDrive">
                <p class="widget-name">format Drive</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="widget" v-on:click="clickHandlerDuplicates">
                <p class="widget-name">find duplicates</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let storageCommands = {
  name: "storageCommands",
  data() {
    return {};
  },
  methods: {
    clickHandlerViewFile: function() {
      this.$router.push("view-file");
    },
    clickHandlerEditFile: function() {
      this.$router.push("edit-file");
    },
    clickHandlerSpace: function() {
      this.$router.push("free-space");
    },
    clickHandlerCache: function() {
      this.$router.push("clear-cache");
      //done
    },
    clickHandlerDrive: function() {
      this.$router.push("format-drive");
      //done
    },
    clickHandlerDuplicates: function() { 
      this.$router.push("find-duplicates");
      //done
    }
  }
};

Vue.component("storage-commands", storageCommands);
export default storageCommands;
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
