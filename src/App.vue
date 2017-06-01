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
