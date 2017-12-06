<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Open link </h4>
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
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let adminBlockUser = {
  name: "adminBlockUser",
  data() {
    return {
      model: {
        user_id: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            // inputType: "password",
            label: "User ID",
            model: "user_id",
            min: 1,
            required: true,
            hint: "Minimum 1 character",
            validator: VueFormGenerator.validators.string,
            buttons: [
              {
                classes: "user-button",
                label: "Execute",
                onclick: function(model) {
                    apiService.blockUser({id: model.user_id})
                    .then((data) => {
                        this.$notify({
                          title: 'Shutting down was executed',
                          text: 'We will notify you about the results info.',
                          type: 'warning'
                      });
                    })
                    .catch((err) => {
                        this.$notify({
                          title: 'Error. User is not blocked',
                          text: '',
                          type: 'warning'
                      });
                    })
                }
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

Vue.component("admin-block-user", adminBlockUser);
export default adminBlockUser;
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
