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
      <button class="user-button" v-on:click="sendRequest(model);InvokeCSharpWithFormValues(this, model)">Log in</button>
      <br>
      <br>
      <p style="color: red;":model="loginResult">{{loginResult}}</p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let loginForm = {
  name: "loginForm",
  data() {
    return {
      model: {
        password: "",
        user_name: ""
      },
      loginResult: '',

      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "User Name",
            model: "user_name",
            placeholder: "Please type here your user name",
            featured: true,
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            model: "password",
            min: 3,
            required: true,
            hint: "Minimum 3 characters",
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
    InvokeCSharpWithFormValues: function (elm, model) {
          let data = {
            command: 'LoginCommand',
            params: {user_name: model.user_name, password: model.password}
          };

          let qs = "params=" + JSON.stringify(data);

          console.log(qs);

          location.href = "hybrid:" + "LoginCommand" + "?" + qs;
    },
    sendRequest: function(data) {

      apiService.login(data.user_name, data.password)
      .then((data) => {
     
        Vue.prototype.$user = data;
        this.loginResult = ''
        this.$router.push('/widgets')
        var event = new CustomEvent("user-logged", {
             detail: data
        });
        window.dispatchEvent(event);
      })
      .catch((err) => {
        this.loginResult = 'Sorry, you are not registered in the system.'
      })
    }
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
