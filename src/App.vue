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
        margin: auto;
        width: 90%;
        max-width: 1000px;
        background-color: white;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin : 0;
    }
</style>
