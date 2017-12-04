<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
      <h4> Welcome to {{this.$router.history.current.name}} !</h4>
    </div>
  </div>
    <div class="col-10 col-lg-6 user-form">
      <p>Shut down your host PC using this command. Please check all the data: </p>
      <p><b>Host</b>: {{this.$user.host}}</p>
      <p><b>Port</b>: {{this.$user.port}}</p>
      <p><b>What will happen</b>: yout host PC will be turned off</p>
      <button v-on:click="handler" class="user-button">Execute</button>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let shutDownCommand = {
  name: "shutDownCommand",
  data() {
    return {
      model: {
        input: ""
      },
      props: ["command"],
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
  created: function () {
 
  },
  methods: {
    handler: function() {
      let data = {
          user_id: this.$user.id,
          command_id: this.$router.history.current.params.commandId,
          params: {}
        };

      apiService.sendCommand(data)
          .then((data) => {
              this.$notify({
                title: 'Shutting down was executed',
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

Vue.component("shut-down-command", shutDownCommand);
export default shutDownCommand;
</script>

<style media="screen">
.user-form {
  border: none;
  border-radius: 40px;
  padding: 7px;
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

.big-size {
  font-size: 25px !important;
}

.user-button {
  cursor: pointer;
  border-radius: 10px;
  font-size: 25px;
  background-color: #159957;
  color: white;
  margin: auto;
  margin-top: 10px;
}
#command {
    display: none;
}
</style>
