<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <ul class="bar">
      <li>Hoaoioa oajpoa </li>
      <li>Hoaoioa oajpoa </li>
      <li>Hoaoioa oajpoa </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
<style lang="scss">
.bar {
  position: absolute;
  width: 245px;
  height: 716px;
  left: -3px;
  top: 0px;

  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
}
</style>