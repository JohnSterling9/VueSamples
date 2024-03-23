<template>
  <img alt="Vue logo" src="./assets/shoplogo.jpg">
  <HelloWorld msg="Shop List"/>
  <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import router from './routes/router.js';

export default {
  name: 'App',
  setup() {
    const routerInstance = router;

    return {
      routerInstance
    };
  },
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}

img {
  width: 140px;
  margin-bottom: 30px;
  margin-top: -5px;
}


</style>
