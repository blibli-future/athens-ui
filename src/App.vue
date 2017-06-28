<template>
    <div>
        <navigation-bar v-if="authenticated"></navigation-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationBar from './component/NavBar.vue';

export default {
  data() {
      return {
        authenticated: true
      };
  },
  components: { NavigationBar }
}
</script>

<style lang="scss">
    @import "_scss/default";
  html, body {
      height: 100%;
      width: 100%;
      font-family: Arial;
      margin : 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
