<template>
    <main>
        <navigation-bar v-if="authenticated"></navigation-bar>
        <router-view></router-view>
    </main>
</template>

<script>
import NavigationBar from './component/NavBar.vue';
import LoginForm from './component/LoginForm.vue';
import Request from './component/Request.vue';

export default {
  data() {
      return {
        authenticated: false
      };
  },
  components: { NavigationBar }
}
</script>

<style lang="scss">
  html, body {
      height: 100%;
      width: 100%;
      font-family: Arial;
  }

  /*body {*/
    /*display: flex;*/
  /*}*/

  * {
    box-sizing: border-box;
  }
</style>
