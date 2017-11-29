<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Mouse control </h4>
    </div>
  </div>
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <!-- <button class="user-button">Exec</button> -->
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

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
            required: true,
            validator: VueFormGenerator.validators.number
          },
          {
            type: "input",
            inputType: "text",
            label: "Y",
            model: "y",
            placeholder: "Enter Y",
            min: 1,
            featured: true,
            required: true,
            validator: VueFormGenerator.validators.number
          },
          {
            type: "select",
            label: "List of commands",
            model: "commands",
            required: true,
            values: function() {
              return [
                { id: "1", name: "Left one click" },
                { id: "2", name: "Left double click" },
                { id: "3", name: "Right one click" }
              ];
            },
            default: "en-US",
            featured: true,
            required: true,
            buttons: [
              {
                classes: "user-button",
                label: "Exec",
                onclick: function(model) {}
              }
            ]
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
