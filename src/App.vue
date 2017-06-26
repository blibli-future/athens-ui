<template>
    <div>
        <navigation-bar v-if="authenticated"></navigation-bar>
        <router-view class="container"></router-view>
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

    .container{
        margin:3% 15%;
    }
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
