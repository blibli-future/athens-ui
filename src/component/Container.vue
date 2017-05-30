<template>
    <div id="container">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Request from './Request.vue';

export default {
  data: function () {
    return {}
  },
  components: {NavBar, Request}
};
</script>

<style>

</style>