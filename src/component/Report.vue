<template>
    <main class="report">
        <h2>Report</h2>
        <br/>
       <filters></filters>
        <br/>
        <report-table></report-table>
    </main>
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
    .report {
        margin: 0 auto;
        width: 90%;
        max-width: 1000px;
    }

</style>