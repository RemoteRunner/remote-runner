<template>
<div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <br>
     <h4> Welcome to {{this.$router.history.current.name}} !</h4>
    </div>
  </div>
    <div class="col-10 col-lg-6 user-form">
      <p> Find duplicates in your file system using this command. Please check all the data: </p>
      <p><b>Host</b>: {{this.$user.host}}</p>
      <p><b>Port</b>: {{this.$user.port}}</p>
      <p><b>What will happen</b>: list of duplicate files will be returned</p>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <button class="user-button" v-on:click="handler(model); InvokeCSharpWithFormValues(this, model)">Execute</button>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import apiService from '../service/api.service.js';

Vue.use(VueFormGenerator);

let findDuplicatesCommand = {
  name: "findDuplicatesCommand",
  data() {
    return {
      model: {
        dir: "",
        fileName: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Directory or Root to search in",
            model: "dir",
            placeholder: "Enter directory to search in",
            min: 1,
            featured: true,
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            type: "input",
            inputType: "text",
            label: "Pattern or File Name",
            model: "fileName",
            placeholder: "Please enter absolute path to file",
            min: 1,
            required: true,
            hint: "Minimum 1 character",
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
              command: this.$router.history.current.name,
              params: {root: model.dir, pattern: model.fileName}
            };

            let qs = "params=" + JSON.stringify(data);

            console.log(qs);

            location.href = "hybrid:" + "SendCommand" + "?" + qs;
    },
    handler: function(model) {
      let data = {
          user_id: this.$user.id,
          command_id: this.$router.history.current.params.commandId,
          params: {root: model.dir, pattern: model.fileName}
        };


      apiService.sendCommand(data)
          .then((data) => {
              this.$notify({
                title: 'Finding duplicates was executed',
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

Vue.component("find-duplicates-command", findDuplicatesCommand);
export default findDuplicatesCommand;
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