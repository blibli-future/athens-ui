<template>
    <login-form></login-form>
</template>

<script>
import LoginForm from './component/LoginForm.vue'

export default {
  data: function () {
      return {
      }
  },
  components: { LoginForm }
}
</script>

<style lang="scss">
    html{
        height: 100%;
        width: 100%;
        font-family: "Arial Rounded MT Bold" ;
    }
    body {
        background-color: #00d8ff;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>
