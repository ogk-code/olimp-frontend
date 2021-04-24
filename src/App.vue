<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Index/><!--<Index/>-->
    <br>
    <span>Якщо проблеми, писати на пошту: </span><span>sasi@</span>
  </div>
</template>

<script>
import Index from './components/Index.vue'
/*import Index from './components/Index.vue'*/

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  padding: 20px;
}
</style>
