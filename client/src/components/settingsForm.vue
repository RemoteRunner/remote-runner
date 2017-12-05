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
      <button class="user-button" v-on:click="handler(model)">Update</button>
    </div>
  </div>
</div>

    

</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let settingsForm = {
  name: "settingsForm",
  data() {
    return {
      model: {
        "user_id": this.$user.id,
        "password": this.$user.password,
        "user_name": this.$user.user_name,
        "notifications": this.notifications,
        "port": this.$user.port,
        "host": this.$user.host,
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
            readonly: true,        
            placeholder: "Host for connection to you host PC",
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "text",
            label: "Port",
            model: "port",
            readonly: true,        
            placeholder: "Port for connection to you host PC",
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
    handler: function(model) {
        apiService.updateUser(model)
          .then((data) => {
          console.log(data);
               this.$notify({
                title: 'User Settings were successfully updated',
                text: '',
                type: 'warning'
            });
          })
          .catch((err) => {
              this.widgets = [];
          })
    }
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
