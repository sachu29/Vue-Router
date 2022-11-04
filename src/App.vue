<template>
  <div id="app">
    <h1>Hello world</h1>
    <hr />
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">User for 10</router-link>
    <router-link to="/users/12">User for 12</router-link>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
