<template>
  <div class="login-form">
    <div class="login-form--text">
      LOG IN
    </div>
    <form>
      <input class="login-form--input" v-model="nik" type="text" placeholder="nik"/>
      <input class="login-form--input" v-model="password" type="password" placeholder="password" />
      <button class="login-form--button">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nik: '',
      password: ''
    }
  },
  name: 'login-form'
}
</script>

<style lang="scss">
    form {
      display: flex;
      flex-direction: column;
    }

    .login-form {
      width: 35%;
      background-color: #008AC0;
      border-radius: 8px;
    }

    .login-form * {
      margin: 10px 5px;
    }

    .login-form--text {
      text-align: center;
      color: white;
      font-size: large;
    }

    .login-form--input {
      border-radius: 4px;
      height: 30px;
    }

    .login-form--button {
      height: 30px;
      color: white;
      background-color: #C06500;
      border-radius: 4px;
      border: none;
    }
</style>
