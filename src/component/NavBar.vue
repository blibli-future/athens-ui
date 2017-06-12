<template>


    <nav>
        <div>
            <ul>
                <li class="dropdown--" >
                    <span style="color: white" class="dropdown--btn" v-on:click="showDropdown">Absensi</span>
                    <ul class="dropdown--content" id="myDropdown" >
                        <li><router-link to="/absensi">Upload</router-link></li>
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
    }
    nav li{
        display: inline-block;
    }
    nav li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
       vertical-align: middle;
    }
    .dropdown-- {

        overflow: hidden;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
    }

    .dropdown--btn {

        cursor: pointer;
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
    }

    .dropdown--content{
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        margin-top: 12.5px;

    }
    .dropdown-- .dropdown--btn {
        cursor: pointer;
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
    }
    .dropdown--content li  {
        float: none;
        color: black;
        display: block;
        margin:0 0 0 -40px;
        padding: 10px 0 15px 20px;;
        border-bottom: thin solid #daeaff;
        text-align: left;
    }
    .dropdown--content a li {
        float: none;
        color: black;
        padding:0;
        text-decoration: none;
        text-align: left;
    }
    .dropdown--:hover .dropdown--btn {
        background-color: #3d7fca;
    }
    .show {
        display: block;
    }

</style>