<template>
    <main>
        <navigation-bar v-if="authenticated"></navigation-bar>
        <router-view class="container"></router-view>
    </main>
</template>

<script>
import NavigationBar from './component/NavBar.vue';
import LoginForm from './component/LoginForm.vue';
import Request from './component/Request.vue';
import Upload from './component/absensi/Upload.vue';

export default {
  data() {
      return {
        authenticated: true
      };
  },

  components: { NavigationBar}


}
</script>

<style lang="scss">
    .container{
        margin:0 15%;
    }
  html, body {
      height: 100%;
      width: 100%;
      font-family: Arial;
      margin : 0;
  }

  /*body {*/
    /*display: flex;*/
  /*}*/

  * {
    box-sizing: border-box;
  }
</style>
