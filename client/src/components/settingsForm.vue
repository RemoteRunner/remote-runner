<template>
<div class="container">
  <div class="row">
    <div class="col-12 text-center">
      <h4>Update account settings</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button">Update</button>
    </div>
  </div>
</div>

    

</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

let settingsForm = {
  name: "settingsForm",
  data() {
    return {
      model: {
        "user_id": "John",
        "password": "123445",
        "user_name": "John",
        "notifications": "true",
        "widgets": ['aaa', 'bbb', 'ccc'],
        "port": 5234,
        "host": "192.168.124.56",
        "role": 'user'   
      },

      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "User name",
            model: "user_name",
            placeholder: "This is how you want us to call you",
            featured: true,
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            min: 10,
            required: true,
            hint: "Minimum 10 characters",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "number",
            label: "Port",
            model: "port",
            min: 2,
            placeholder: "Port for connection to you host PC",
            validator: VueFormGenerator.validators.number
          },
          {
            type: "input",
            inputType: "text",
            label: "Host Adress",
            model: "host",
            placeholder: "Host for connection to you host PC",
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

Vue.component("settings-form", settingsForm);
export default settingsForm;
</script>

<style media="screen">
.hint {
    color: grey;
    font-size: 12px;
}
.errors, .help-block {
    color: red;
    font-size: 12px;
}

.user-form {
    border: 2px solid green;
    border-radius: 40px;
    padding: 27px;
    text-align: left;
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
