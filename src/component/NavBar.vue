<template>

    <nav class="nav">
        <router-link class="nav__link nav__item nav__title" to="/index">ATHENS</router-link>
        <ul class="nav__menu">
            <li class="nav__item nav__link nav__drop-link">Absensi
                <ul class="nav__drop-down">
                    <li class="nav__sub-item"><router-link class="nav__link" to="/upload">Upload</router-link></li>
                    <li class="nav__sub-item"><router-link class="nav__link" to="/shift">Shift</router-link></li>
                    <li class="nav__sub-item"><router-link class="nav__link" to="/presensi">Presensi</router-link></li>
                    <li class="nav__sub-item"><router-link class="nav__link" to="/employee">Employee List</router-link></li>
                </ul>
            </li>
            <li class="nav__item"><router-link class="nav__link" to="/index">Request</router-link></li>
            <li class="nav__item"><router-link class="nav__link" to="/approval">Approval</router-link></li>
            <li class="nav__item"><router-link class="nav__link" to="/report">Report</router-link></li>
        </ul>
        <div v-on:click="invalidate" class="nav__item nav__link nav__log-out">Log Out</div>
    </nav>
</template>

<script>
export default {
    methods:{
         showDropdown:function ()  {
    document.getElementById("myDropdown").classList.toggle("show");
         },
        created:function () {
            window.onclick = function(e) {
                if (!e.target.matches('.dropdown--btn')) {
                    var myDropdown = document.getElementById("myDropdown");
                    if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                    }
                }
            }
        },
        invalidate: function () {
            localStorage.removeItem('jwtToken');
            this.$emit('invalidating');
        }
  }
}
</script>

<style lang="scss">
.nav {
    background-color: #5b8eca;
    padding: 0 3px;
    font-size: 16px;

    &__menu {
        display: inline-block;
    }

    &__item {
        padding: 14px 20px;
        color: white;
        display: inline-block;

        &:hover{
            background-color: #3d7fca;
        }
    }

    &__title {
        display: inline-block;
    }

    &__link {
        cursor: pointer;
        color: white;
    }

    &__log-out {
        float: right;
        display: inline-block;
    }

    &__drop-down {
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        margin: 11px 0 0 -20px;
        display: none;
    }

    &__drop-link:hover {
        > .nav__drop-down {
            display: block;
        }
    }

    &__sub-item {
        padding: 14px 20px;

        > .nav__link{
            color: black;
        }

        &:hover {
            background-color: #c1e5ff;
        }
    }
}
</style>