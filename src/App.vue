<template>
    <router-view></router-view>
</template>

<script>
import LoginForm from './component/LoginForm.vue';
import Container from './component/Container.vue';

export default {
  data() {
      return {};
  },
  components: { LoginForm, Container }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  /*body {*/
    /*display: flex;*/
  /*}*/

  * {
    box-sizing: border-box;
  }
</style>
