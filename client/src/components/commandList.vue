<template>
<div class="container" style="text-align: center;">
  <div class="row">
    <div class="col-12 text-center">
    <br>
    <br>
      <h4>Welcome to the command list! </h4>
    </div>
  </div>
  
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button">Exec</button>
    </div>

</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

let commandList = {
  name: "commandList",
  data() {
    return {
      model: {
        params: "",
        notifications: "",
        widgets: [],
        port: 0,
        host: "",
        role: "user"
      },

      schema: {
        fields: [
                {
            type: "select",
            label: "List of commands",
            model: "commands",
            required: true,
            values: function() {
            return [
                { id: "1", name: "Storage - view/edit file" },
                { id: "2", name: "Storage - free space" },
                { id: "3", name: "Storage - clean cache/trash bin" },
                { id: "4", name: "Storage - format disk" },
                { id: "5", name: "Storage - search duplicates" },
                { id: "6", name: "Devices - get/set mouse coordinates" },
                { id: "7", name: "Devices - press mouse button" },
                { id: "8", name: "Console - exec command" },
                { id: "9", name: "Process - check running processes" },
                { id: "10", name: "Process - terminate process" },
                { id: "11", name: "Process - create new" },
                { id: "12", name: "Browser - open page" },
                { id: "13", name: "System - turn off" },
                { id: "14", name: "System - restart" },
                { id: "15", name: "System - log off" },
                { id: "16", name: "System - hybernate"}
            ]
            },
            default: "en-US",
            featured: true,
            required: true
        },

          {
            type: "input",
            inputType: "text",
            label: "Params",
            model: "params",
            placeholder: "Enter the params",
            featured: true,
            required: true,
            validator: VueFormGenerator.validators.string
          },

          {
            type: "checkbox",
            label: "Notifications",
            model: "notifications",
            default: true
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
    clickHandler: function() {}
  }
};

Vue.component("command-list", commandList);
export default commandList;
</script>

<style media="screen">
.hint {
  color: grey;
  font-size: 12px;
}
.errors,
.help-block {
  color: red;
  font-size: 12px;
}

.user-form {
  border: 2px solid green;
  border-radius: 40px;
  padding: 27px;
  text-align: center;
  margin: auto !important;
}

.user-button {
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  background-color: #159957;
  color: white;
  margin: auto;
}
</style>
