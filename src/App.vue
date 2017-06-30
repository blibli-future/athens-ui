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

export default {
    data() {
        return {
            authenticated: false
        };
    },
    created: function () {
        if(localStorage.getItem('jwtToken')!==null) {
            this.registerToken();
        }
    },
    methods: {
        registerToken: function() {
            this.authenticated = true;

            this.$http.defaults.headers.common['Authorization'] =
                'Bearer ' + localStorage.getItem('jwtToken');

            this.$router.push("/index");
        },
        removeToken: function () {
            this.authenticated = false;
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
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin : 0;
    }
</style>
