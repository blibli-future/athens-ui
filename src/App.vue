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
    }
    body {
        background-color: #005373;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
