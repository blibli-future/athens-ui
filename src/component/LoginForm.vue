<template>
  <div class="login-form">
    <div class="login-form--text">
      LOG IN
    </div>
    <form onclick="return false">
      <!--I think it ^ shouldn't be like this-->
      <input class="login-form--input" v-model="nik" type="text" placeholder="nik" autofocus/>
      <input class="login-form--input" v-model="password" type="password" placeholder="password" />
      <button v-on:click="tryCors" class="login-form--button">Log In</button>
    </form>
    <span id="answer">{{answer}}</span>
  </div>
</template>

<script>
  import URL from '../Url';

  export default {
    data() {
      return {
        nik: '',
        password: '',
        answer: ''
      }
    },
    methods: {
      tryCors: function () {
        fetch(URL.LOGIN_URL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              nik: this.nik,
              password: this.password
            })
        }).then(function (response) {
          return response.json();
        }).then(function (response) {
          console.log(response);
        })
      }
    },
    name: 'login-form'
  }
</script>

<style lang="scss">
    form {
      display: flex;
      flex-direction: column;
      margin: 0px;
    }

    .login-form {
      width: 35%;
      background-color: #008AC0;
      /*border-radius: 8px;*/
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
      /*border-radius: 4px;*/
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
