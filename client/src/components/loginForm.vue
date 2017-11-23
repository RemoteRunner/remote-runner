<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Welcome to the application :) </h4>
    </div>
  </div>
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button">Log in</button>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

let loginForm = {
  name: "loginForm",
  data() {
    return {
      model: {
        password: "J0hnD03!x4",
        user_name: "vlada_ty"
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
            min: 6,
            required: true,
            hint: "Minimum 10 characters",
            validator: VueFormGenerator.validators.string
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

Vue.component("login-form", loginForm);
export default loginForm;
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
.errors, .help-block {
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
}
</style>
