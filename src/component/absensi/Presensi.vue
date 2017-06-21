<template >
    <div>
        <h2>Presensi</h2><br/>
        <search-bar></search-bar>
        <br/>
        <tabel></tabel>
    </div>

</template>
<script>
    import SearchBar from './presensi/SearchPresensi.vue';
    import Tabel from './presensi/TablePresensi.vue';
    export default {
        data() {
            return {};
        },
        components: {SearchBar, Tabel}
    };
</script>
<style lang="scss">

</style>