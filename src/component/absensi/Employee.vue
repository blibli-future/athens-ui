<template>
    <div>
        <br/>
        <h3>Employee List</h3>
        <br/>
        <search></search>
        <br/>
       <table-emp class="container--"> </table-emp>

    </div>
</template>


<script>
    import Search from './Employee/SearchEmp.vue';
    import TableEmp from './Employee/TableEmp.vue'
    export default {
        data() {
            return {

            };
        },

        components: {Search, TableEmp}


    }
</script>

<style lang="scss">
    .button{
        display: inline-block;
        padding: 8px 12px;
        margin-bottom: 0;
        font-size: 14px;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #b3dcff;
        cursor: pointer;
        &:hover{
            background-color: #92ccff;
        }
    }

</style>
