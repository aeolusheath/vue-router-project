<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="kevin">
      <div class="k">
        <a> kkk</a>
      </div>
    </div>
    <router-view/>
    <!--<template>
      ddd
    </template>-->
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
