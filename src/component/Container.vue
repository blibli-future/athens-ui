<template>
    <div id="container">
        <navigation-bar></navigation-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationBar from './NavBar.vue';
import Request from './request/Request.vue';

export default {
  data() {
    return {};
  },
  components: { NavigationBar, Request}
};
</script>

<style>

</style>