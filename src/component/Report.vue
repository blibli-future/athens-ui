<template>
    <div>
        <h2>Report</h2>
        <br/>
       <filters></filters>
        <br/>
        <report-table></report-table>
    </div>
</template>
<script>
    import Filters from './report/FilterReport.vue';
    import ReportTable from './report/TableReport.vue';
    export default {
        data() {
            return {};
        },
        components:{Filters, ReportTable}
    };
</script>
<style lang="scss">
    .container{
        margin : 0 5%;
    }

</style>