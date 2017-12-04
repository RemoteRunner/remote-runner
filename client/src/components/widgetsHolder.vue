<template>
<div class="container">
    <h2>List of widgets</h2>
    <div class="row">
       <div class="col-12 col-md-4"  v-for="w in this.widgets">
            <div class="widget"  v-on:click="handler(w)">
                <p class="widget-name">{{w.title}}</p>
                <p>{{w.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import apiService from '../service/api.service.js';

let widgetsHolder = {
  name: "widgetsHolder",
  data() {
    return {
        widgets: []
    };
  },
  created: function () {
    console.log('we exist')
        apiService.getWidgets()
          .then((data) => {
                this.widgets = data;
          })
          .catch((err) => {
              this.widgets = [];
          })
    },
  methods: {
    handler: function(widget) {
      this.$router.push({ name: 'widget', params: { widgetId: widget.id}});
    }
  }
};

Vue.component("widgets-holder", widgetsHolder);
export default widgetsHolder;
</script>

<style media="screen">
    .container h2 {
        margin-top: 20px;
    }
    .widget {
        height: 180px;
        border: 7px solid #159957;
        margin-top: 30px;   
        padding: 10px;
        cursor: pointer;
    }
    .widget:hover{
      background-color: lightgreen;
    }
    .widget-name {
        font-weight: bold;
    }
</style>
