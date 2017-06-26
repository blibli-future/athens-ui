<template>
    <div>
        <br/>
        <h2>Employee List</h2>
        <br/>
        <search></search>
        <br/>
       <table-emp> </table-emp>

    </div>
</template>


<script>
    import Search from './employee/SearchEmp.vue';
    import TableEmp from './employee/TableEmp.vue'
    export default {
        data() {
            return {

            };
        },

        components: {Search, TableEmp}
    }
</script>

<style lang="scss">
    @import "../../_scss/style";
</style>
