<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Welcome to Manipulating Mouse Commands! </h4>
    </div>
  </div>
    <div class="col-10 col-lg-6 user-form">
     <p>Manipulate your mouse using this command. Please check all the data: </p>
      <p><b>Host</b>: {{this.$user.host}}</p>
      <p><b>Port</b>: {{this.$user.port}}</p>
      <p><b>What will happen</b>: your mouse will click on position [x;y] </p>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button" v-on:click="handler(model);InvokeCSharpWithFormValues(this, model)">Execute</button>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let mouseCommand = {
  name: "mouseCommand",
  data() {
    return {
      model: {
        x: "",
        y: "",
        fileName: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "X",
            model: "x",
            placeholder: "Enter X",
            min: 1,
            featured: true,
            required: true
          },
          {
            type: "input",
            inputType: "text",
            label: "Y",
            model: "y",
            placeholder: "Enter Y",
            min: 1,
            featured: true,
            required: true
          },
          {
            type: "select",
            label: "List of commands",
            model: "commands",
            required: true,
            values: function() {
              return [
                { id: "20", name: "LeftClick" },
                { id: "22", name: "LeftDoubleClick" },
                { id: "21", name: "RightClick" }
              ];
            },
            default: "en-US",
            featured: true,
            required: true
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    };
  },
  methods: {
    InvokeCSharpWithFormValues: function (elm, model) {
    console.log(model);
          let commandsHash = {
            20: 'LeftClick',
            22: 'LeftDoubleClick',
            21: 'RightClick'
          };

          let data = {
            command: commandsHash[model.commands],
            params: {x: model.x, y: model.y}
          };

          let qs = "params=" + JSON.stringify(data);

          console.log(qs);

          location.href = "hybrid:" + "SendCommand" + "?" + qs;
    },
    handler: function(model) {
      let data = {
          user_id: this.$user.id,
          command_id: model.commands,
          params: {x: model.x, y: model.y}
        };


      apiService.sendCommand(data)
          .then((data) => {
              this.$notify({
                title: 'Mouse Click was executed',
                text: 'We will notify you about the results info.',
                type: 'warning'
            });
          })
          .catch((err) => {
              this.widgets = [];
          })
    }
  }
};

Vue.component("mouse-command", mouseCommand);
export default mouseCommand;
</script>

<style media="screen">
.user-form {
  border: 2px solid green;
  border-radius: 40px;
  padding: 27px;
  text-align: center;
  margin: auto !important;
}
.hint {
  color: grey;
  font-size: 12px;
}
.errors,
.help-block {
  color: red;
  font-size: 12px;
}

.user-button {
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  background-color: #159957;
  color: white;
  margin: auto;
  margin-top: 10px;
}
</style>
