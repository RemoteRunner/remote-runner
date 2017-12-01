<template>
<div class="container">
    <h2>Admin commands</h2>
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="widget"  v-on:click="clickHandlerAdminJournal">
                <p class="widget-name">Journal</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
        <div class="col-12 col-md-4" >
            <div class="widget" v-on:click="clickHandlerAdminBlockUser">
                <p class="widget-name">Block user</p>
                <p>Description in one short sentence, as you said.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from "vue";

let adminHolder = {
  name: "adminHolder",
  data() {
    return {};
  },
  methods: {
    clickHandlerAdminJournal: function() {
      this.$router.push("admin-journal");
    },
    clickHandlerAdminBlockUser: function() {
      this.$router.push("admin-block-user");
    }
  }
};

Vue.component("admin-holder", adminHolder);
export default adminHolder;
</script>

<style media="screen">
.container h2 {
  margin-top: 20px;
}
.widget {
  height: 150px;
  border: 7px solid #159957;
  margin-top: 30px;
  padding: 10px;
}
.widget-name {
  font-weight: bold;
}
</style>
