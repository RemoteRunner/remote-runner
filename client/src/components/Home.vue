<template>
    <div>
    <hr>
    <br>
    <div class="row holder-buttons">
      <div class="col-6 col-lg-6 text-center">
        <button-login></button-login>
      </div>
      <div class="col-6 col-lg-6 text-center">
        <button-register></button-register>
      </div>
    </div>
    <br>
    <br>
    <h3>What is this program?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <h3>How does it work?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
    <h3>Why would I use it?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
    <h3>What is the time bias?</h3>
    <p style="padding: 30px; margin-top: -30px;"align="justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
    </div>
</template>

<script>
import buttonLogin from '@/components/buttonLogin';
import buttonRegister from '@/components/buttonRegister';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Remote Runner',
      underMessage: 'Remote Control for Your PC'
    }
  }
}
</script>

<style media="screen">

</style>
