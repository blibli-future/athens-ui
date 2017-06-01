<template>
    <div>
        <navigation-bar v-if="authenticated"></navigation-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationBar from './component/NavBar.vue';
import LoginForm from './component/LoginForm.vue';
import Container from './component/Container.vue';

export default {
  data() {
      return {
        authenticated: true
      };
  },
  components: { Container, NavigationBar, LoginForm }
}
</script>

<style lang="scss">
    html{
        height: 100%;
        width: 100%;
        font-family: "Arial Rounded MT Bold" ;
    }
    body {
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>
