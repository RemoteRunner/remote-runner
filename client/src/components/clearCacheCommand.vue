<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Clear Cache </h4>
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

let clearCacheCommand = {
  name: "clearCacheCommand",
  data() {
    return {
      model: {
        input: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            // inputType: "password",
            label: "Command",
            model: "input",
            // min: 1,
            // required: true,
            // hint: "Minimum 1 character",
            validator: VueFormGenerator.validators.string,
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

Vue.component("clear-cache-command", clearCacheCommand);
export default clearCacheCommand;
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
#command {
  display: none;
}
</style>
