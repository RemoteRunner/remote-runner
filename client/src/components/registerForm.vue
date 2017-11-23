<template>
<div class="container" style="text-align: center;">
  <div class="row">
    <div class="col-12 text-center">
    <br>
    <br>
      <h4>Welcome to registration! </h4>
    </div>
  </div>
  
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button">Register</button>
    </div>

</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

let registerForm = {
  name: "registerForm",
  data() {
    return {
      model: {
        "password": "",
        "user_name": "",
        "notifications": "",
        "widgets": [],
        "port": 0,
        "host": "",
        "role": 'user'   
      },

      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "User Name",
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

Vue.component("register-form", registerForm);
export default registerForm;
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
