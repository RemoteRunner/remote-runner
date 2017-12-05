<template>
<div class="container">
  <div class="row">
    <div>
    <hr>
    <br>
    <div v-if="this.user === undefined" class="row holder-buttons">
      <div class="col-2 col-lg-2">

      </div>
      <div  class="col-4 col-lg-4 text-center">
        <button-login></button-login>
      </div>
      <div class="col-4 col-lg-4 text-center">
        <button-register></button-register>
      </div>
      <div class="col-2 col-lg-2">

      </div>
    </div>
    <br>
    <br>
    <div class="row ">
      <div class="col-0 col-lg-1">
        
      </div>
      <div class="col-12 col-lg-10">
        <h3>What is this program?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      <b>Remote Runner</b> is a program for remote Control of your PC. Our vision is to help our clients succeed no matter what happens. Remote Control system like Remote Runner exactly can do that. It doesn't depend on how far you are from home, you can always connect by <b>Remote Runner</b> through Wi-Fi and perform anything you need.
    </p>
    <h3>How does it work?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      We propose you two different solutions: <b>LAN (the Local Area Network)</b> and <b>Internet based solution</b>. All you have to do is to install the Android App (Solution 1) or Visit our website rr-test-vlada.herokuapp.com(Solution 2). Then you have to register and choose the widget and specific command.
    </p>
    <h3>Why would I use it?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      Our application is absolutely free, it works fast and it has a very expandable architecture, so that you can request any command/widget and admin team will shortly contact you. 
    </p>
    <h3>What is the time bias?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      If you are using <b>Remote Runner</b> in LAN, there is no time interval between receiving command results and requesting the performance of command. If you are using the Internet, than the time bias is about 2 mins.  
    </p>
      </div>
      <div class="col-0 col-lg-1">
        
      </div>
    </div>
    </div>
  </div>
</div>

</template>

<script>
import Vue from "vue";
import buttonLogin from "@/components/buttonLogin";
import buttonRegister from "@/components/buttonRegister";

export default {
  name: "Home",
  props: ["user"],
  data() {
    return {
      msg: "Remote Runner",
      underMessage: "Remote Control for Your PC"
    };
  }
};
</script>

<style media="screen">

</style>
