<template>
    <div>
        <navigation-bar v-if="authenticated"
                        v-on:invalidating="removeToken"></navigation-bar>
        <router-view v-on:receivingToken="registerToken">
        </router-view>
    </div>
</template>

<script>
import NavigationBar from './component/NavBar.vue';
import JwtDecode from 'jwt-decode';

export default {
    data() {
        return {
            authenticated: true
        };
    },
    created: function () {
        if(localStorage.getItem('jwtToken')!==null) {
            this.registerToken();
        }
    },
    methods: {
        registerToken: function(jwtToken) {
            this.authenticated = true;

            const payload = JwtDecode(jwtToken);

            localStorage.setItem('jwtToken', jwtToken);
            localStorage.setItem('nik', payload.nik);
            localStorage.setItem('sub', payload.sub);
            localStorage.setItem('roles', payload.roles[0]);

            this.$http.defaults.headers.common['Authorization'] =
                'Bearer ' + localStorage.getItem('jwtToken');

            this.$router.push("/index");
        },
        removeToken: function () {
            this.authenticated = false;

            localStorage.removeItem('jwtToken');
            localStorage.removeItem('nik');
            localStorage.removeItem('sub');
            localStorage.removeItem('roles');

            delete this.$http.defaults.headers.common['Authorization'];
            this.$router.push("/login");
        }
    },
    components: { NavigationBar }
}
</script>

<style lang="scss">
    @import "_scss/default";
  html, body {
      height: 100%;
      width: 100%;
      font-family: Arial;
      margin : 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
