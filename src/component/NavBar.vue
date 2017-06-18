<template>


    <nav>
        <div>
            <ul>
                <li class="dropdown--" style="color: white" v-on:click="showDropdown"> <a> Absensi</a>
                    <ul class="dropdown--content" id="myDropdown" >
                        <li><router-link to="/upload">Upload</router-link></li>
                        <li><router-link to="/app/request">Shift</router-link></li>
                        <li><router-link to="/app/request">Presensi</router-link></li>
                        <li><router-link to="/app/request">Employee List</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/index">Request</router-link></li>
                <li><router-link to="/app/request">Approval</router-link></li>
                <li><router-link to="/app/request">Report</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
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
        }
  }



}



</script>


<style lang="scss">
    nav {
        background-color: #5b8eca;
        padding: 0 0 0 3px;
        margin: -16px 0 0 -8px;
        font: {
            size: 14px;
        };
        li{
            &:hover{
                background-color: #3d7fca;
            }

            display: inline-block;
            a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                vertical-align: middle;
            }
        }
    }

    .dropdown--content{
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border:{
            color: #dee1e4;
            width: 1px;
            style: solid;
        }
    }

    .dropdown-- {
        overflow: hidden;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        background-color: inherit;
        font: {
            size: 14px;
        };

        .dropdown--content{
            li{
                float: none;
                color: black;
                display: block;
                margin:0 0 0 -40px;
                padding: 10px 0 15px 20px;
                &:hover{
                    background-color: #c1e5ff;
                    cursor: pointer;
                }
                a{
                    float: none;
                    color: black;
                    padding:0;
                    text-decoration: none;
                    text-align: left;
                }
            }
        }
    }

    .show {
        display: block;
    }

</style>