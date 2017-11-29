<template>

  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="hello">
      <div class="row">
        <div class="col-12">
          <!-- <quick-menu2></quick-menu2> -->
        </div>
      </div>
      <div class="small-logo">
        <i style="color: darkblue; font-size:40px; vertical-align: middle;" class="fa fa-laptop fa-6x" aria-hidden="true"></i>
        <p style="color: darkblue; font-size:30px; display:inline-block;font-weight: 700;">RR</p>
      </div>
      <div style="margin:0px;" class="row remote-runner">
        <div class="col-12 col-lg-8">
          <h1>Remote Runner</h1>
          <h3>Remote Control for Your PC</h3>
          <div class="row">
            <div class="col-12">
              <h5 style="color: white;" class="links">
                <a style="color: white;" href="//github.com/RemoteRunner">
                  <i class="fa fa-github" style="color: white;" aria-hidden="true"></i> GitHub </a> &#8200; &#8200; &#9676;
                <a style="color: white;margin-left: 20px;" href="#"> GooglePlay </a> &#8200; &#8200; &#9676; &#8200; &#8200; Version 1.0.0
              </h5>
            </div>
          </div>
        </div>
        <div class="col-0 col-lg-4">
          <i class="fa fa-laptop fa-6x big" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <br>
    <router-link style="color: #159957; font-weight: 900;" :to="{ name: 'Home', params: {} }">Home |</router-link>
    <router-link style="color: #159957; font-weight: 900;" to='/settings'>Settings |</router-link>
    <router-link style="color: #159957; font-weight: 900;" to='/journal'>Journal |</router-link>
    <!-- <router-link style="color: #159957; font-weight: 900;" to='/drag'>Drag |</router-link> -->
    <router-link style="color: #159957; font-weight: 900;" to='/widgets'>Widgets |</router-link>
    <router-link style="color: #159957; font-weight: 900;" to='/request-widget'>Request widget |</router-link>
    <router-link style="color: #159957; font-weight: 900;" to='/request-command'>Request command |</router-link>
    <router-link style="color: #159957; font-weight: 900;" to='/admin'>Admin</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>



<style media="screen">
@font-face {
  font-family: "Roboto";
  src: url("../static/robotottf/Roboto-Black.ttf") format("ttf");
}

@import url(//fonts.googleapis.com/css?family=Roboto);

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  width: 100%;
  height: 100vh;
  background-image: white;
}

.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

div.hello {
  width: 100%;
}

div.remote-runner {
  background-image: linear-gradient(120deg, #155799, #159957);
  width: 100%;
}
/* div.remote-runner>div.col-6 {
  margin-left: 25%;
} */

div.hello h1 {
  color: white;
  font-size: 5em;
}

div.hello h2 {
  color: #eeeeee;
}

div.hello div.holder-buttons {
  margin-top: 5%;
}

div.footer {
  margin-top: 35%;
}

div.footer > * {
  color: white;
  margin: 0px 5px;
}

div.footer a {
  color: white;
  text-decoration: underline;
}

.big {
  font-size: 180px !important;
  color: white;
}

.remote-runner h1 {
  font-weight: 500;
  text-align: center;
  text-shadow: -1px 1px 0 #ddd, -2px 2px 0 #c8c8c8, 1px 6px 0 #155799,
    -4px 4px 0 #159957, 3px 6px 0 #159957, 0px 1px 1px rgba(0, 0, 0, 0.4),
    0px 2px 2px rgba(0, 0, 0, 0.3), -1px 3px 3px rgba(0, 0, 0, 0.2),
    -1px 5px 5px rgba(0, 0, 0, 0.1), -2px 8px 8px rgba(0, 0, 0, 0.1),
    -2px 13px 13px rgba(0, 0, 0, 0.1);
}

.remote-runner h3 {
  color: white;
  font-weight: 700;
}

.small-logo {
  color: darkblue;
  font-size: 40px;
  /* text-align: left !important; */
  float: left;
  margin-left: 20px;
  height: 54px;
  margin-top: -14px;
}

.links {
  font-size: unset;
}

body,
html {
  overflow-x: hidden;
}

@media screen and (max-width: 900px) {
  i.fa-laptop {
    display: none;
  }
}
</style>
