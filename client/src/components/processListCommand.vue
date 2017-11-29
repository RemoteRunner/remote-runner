<template>
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
        <br>
        <h4> Process List </h4>
        </div>
    </div>
    <div class="col-10 col-lg-6 user-form">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      <div class="row">
        <ul>
            <li v-for="process in model.processes">
                {{ process.name }}
            </li>
        </ul>
    </div>
    </div>
    
</div>
</template>

<script>
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";

Vue.use(VueFormGenerator);

let processListCommand = {
  name: "processListCommand",
  data() {
    return {
      
      model: {
        input: "",
        processes: [{ name: "Foo" }, { name: "Bar" }],
      },
      schema: {
        fields: [
          {
            type: "input",
            label: "Command",
            model: "input",
            validator: VueFormGenerator.validators.string,
            buttons: [
              {
                classes: "user-button",
                label: "Exec",
                onclick: function(model) {
                    // this.model.processes.push({name:'buz'});
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

Vue.component("process-list-command", processListCommand);
export default processListCommand;
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
