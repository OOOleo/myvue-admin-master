<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/login">登录界面</router-link>
  </div>
  <div class="rview">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

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
}
.rview{
  margin-top: 50px;
}
</style>
