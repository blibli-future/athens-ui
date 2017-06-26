<template>
  <main class="login">
    <div class="login-form">
      <h2 class="login-form--text">
        A T H E N S
      </h2>
      <form onsubmit="return false">
        <!--I don't think it ^ should be like this-->
        <input class="login-form--input" v-model="nik" type="text" placeholder="nik" autofocus/>
        <input class="login-form--input" v-model="password" type="password" placeholder="password" />
        <button v-on:click="authenticateUser" class="login-form--button">Log In</button>
      </form>
    </div>
  </main>
</template>

<script>
  import API from '../constant/api.url';

  export default {
    data() {
      return {
        nik: '',
        password: '',
      }
    },
    methods: {
      authenticateUser: function authenticateUser() {
        fetch(API.LOGIN_URL, {
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
    }
  }
</script>

<style lang="scss" scoped="true">
  .login {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg");
    width: inherit;
    height: 94.5vh;
    display: flex;
    background-size: cover;
  }

  .login-form {
    margin: auto;

    width: 500px;
    max-width: 25%;
    /*height: 200px;*/
    /*max-height: 30%;*/

    background-color: rgba(255, 255, 255, 0.5);

    border-radius: 5px;

    * {
      box-sizing: border-box;
      margin: 5px auto;
      padding: 5px;
      width: 97.5%;
    }

    &--text {
      background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: x-large;
      color: #101010;
      border-radius: 5px;
    }

    &--input {
      margin: 10px 0;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid #2b669a;
      border-radius: 5px;

      &:focus {
        /*border: 1px solid #5bc0de;*/
      }
    }

    &--button {
      background-color: #5bc0de;
      border-radius: 5px;
      border: 1px solid #2b669a;
      color: black;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
