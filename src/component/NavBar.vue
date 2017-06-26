<template>
    <nav class="nav">
        <router-link class="nav__link" to="/index"><div class="nav__item"><strong>ATHENS</strong></div></router-link>
        <ul class="nav__menu">
            <li class="nav__item nav__link nav__drop-link">Absensi
                <ul class="nav__drop-down">
                    <router-link class="nav__link" to="/upload"><li class="nav__sub-item">Upload</li></router-link>
                    <router-link class="nav__link" to="/shift"><li class="nav__sub-item">Shift</li></router-link>
                    <router-link class="nav__link" to="/presensi"><li class="nav__sub-item">Presensi</li></router-link>
                    <router-link class="nav__link" to="/employee"><li class="nav__sub-item">Employee List</li></router-link>
                </ul>
            </li>
            <router-link class="nav__link" to="/index"><li class="nav__item">Request</li></router-link>
            <router-link class="nav__link" to="/approval"><li class="nav__item">Approval</li></router-link>
            <router-link class="nav__link" to="/report"><li class="nav__item">Report</li></router-link>
        </ul>
        <a class="nav__link"><div class="nav__item">Log Out</div></a>
    </nav>
</template>

<script>
export default {
    methods:{
        showDropDown: function() {
            document.getElementById("dropDownBox").classList.toggle("nav__drop-down--hidden");
        }
    },
    mounted: function() {
        window.onclick = function(e) {
          if (!e.target.matches('.dropdown--btn')) {
            var myDropdown = document.getElementById('dropDownBox');
            if (myDropdown.classList.contains('show')) {
              myDropdown.classList.remove('show');
            }
          }
        }
    }
}
</script>

<style lang="scss">
.nav {
    background-color: #5b8eca;
    padding: 0 3px;
    font-size: 16px;
    display: flex;
    font-family: Helvetica;

    &__menu {
        flex-grow: 1;
        display: flex;
        z-index: 2;
    }

    &__item {
        padding: 14px 20px;
        color: white;

        &:hover{
            background-color: #3d7fca;
        }
    }

    &__link {
        cursor: pointer;
        color: white;
    }

    &__drop-down {
        position: absolute;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        margin: 13.5px 0px 0px -20px;
        z-index: 1;
        display: none;

        > .nav__link{
            color: black;
        }
    }

    &__drop-link:hover {
        > .nav__drop-down {
            display: block;
        }
    }

    &__sub-item {
        padding: 14px 20px;

        &:hover {
            background-color: #c1e5ff;
        }
    }
}
</style>