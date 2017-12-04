<template>
<div class="container">
    <h2>List of commands</h2>
    <div class="row">
       <div class="col-12 col-md-4"  v-for="c in this.commands">
            <div class="command"  v-on:click="handler(c)">
                <p class="widget-name">{{c.title}}</p>
                <p>{{c.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import apiService from '../service/api.service.js';

let widgetCommandsHolder = {
  name: "widgetCommandsHolder",
  data() {
    return {
      commands: []
    };
  },
  created: function () {
    let widgetId = (this.$router.history.current.params.widgetId);

     apiService.getWidgetCommands()
          .then((data) => {
               this.commands = data.filter(c => c.widget_id === widgetId);
          })
          .catch((err) => {
              this.widgets = [];
          })
  },
  methods: {
    handler: function(command) {
      let widgetId = (this.$router.history.current.params.widgetId);

      this.$router.push({path: `/widgets/${widgetId}/commands/${command.title}/${command.id}`, params: {command: command}});
    }
  }
};

Vue.component("widget-commands-holder", widgetCommandsHolder);
export default widgetCommandsHolder;
</script>

<style media="screen">
.container h2 {
  margin-top: 20px;
}
.command {
  height: 140px;
  border: 7px solid #155799;
  margin-top: 30px;
  padding: 10px;
  cursor: pointer;
}
.command:hover{
  background-color: lightblue;
}
.widget-name {
  font-weight: bold;
}
</style>
